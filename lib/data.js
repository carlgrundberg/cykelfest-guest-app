import { google } from "googleapis";
import timestamps from "./timestamps";
import guests from "../data/guests.json";
import meals from "../data/meals.json";

const staticData = {
  "Måltider": meals,
  "Gästlista": guests,
};

function getSheetsClient() {
  const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    // we need to replace the escaped newline characters
    // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
  );

  const sheets = google.sheets({ version: "v4", auth: jwt });
  return sheets;
}

async function getData(range) {
  // if (process.env.NODE_ENV === 'production') {
  return staticData[range];
  // } 

  try {
    const sheets = getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range,
    });

    const rows = response.data.values;

    // if (rows.length) {
    //   return rows.map((row) => ({
    //     title: row[0],
    //     description: marked(row[1].replace(/\n/g, "<br />"), { renderer }),
    //     href: row[2] || null,
    //   }));
    // }

    return rows.slice(1);
  } catch (err) {
    console.log(err);
  }

  return [];
}

async function updateCellValue(range, value) {
  const sheets = getSheetsClient();
  const response = await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
    valueInputOption: "USER_ENTERED",
    resource: { range, majorDimension: "ROWS", values: [[value]] },
  });
}

const onlyNumbers = (num) => num.replace(/[\D]+/g, "").replace(/^0/, "");

export async function getHostByPhone(phone) {
  const phoneNumber = onlyNumbers(phone);
  const data = await getData("Måltider");

  const host = data.find((row) =>
    row.find((cell) => onlyNumbers(cell).includes(phoneNumber))
  );

  if (host) {
    const [name] = host;
    return { name };
  }

  return null;
}

function getHostData(data, host) {
  const row = data.find((row) => row[0] === host);
  if (row) {
    const [name, address, phone1, phone2, dish, note, , , , , , , confirmed] =
      row;
    return { name, address, phone1, phone2, dish, note, confirmed };
  }
  return null;
}

export async function getDataForHost(host) {
  const guests = await getData("Gästlista");
  const meals = await getData("Måltider");

  const row = guests.find((row) => row[0] === host);

  if (row) {
    const [, , , host1, , host2, , host3] = row;
    const now = new Date();

    const obj = {
      host1: false,
      host2: false,
      host3: false,
      timestamps,
    };

    if (host1 === host || now > timestamps[0]) {
      obj.host1 = getHostData(meals, host1);
    }

    if (host2 === host || now > timestamps[1]) {
      obj.host2 = getHostData(meals, host2);
    }

    if (host3 === host || now > timestamps[2]) {
      obj.host3 = getHostData(meals, host3);
    }

    obj.guests = guests.filter(
      (row) => row[3] === host || row[5] === host || row[7] === host
    ).length;

    return obj;
  }
  return null;
}

export async function confirmDish(host) {
  const data = await getData("Måltider");

  const row = data.findIndex((row) => row[0] === host);

  if (row > -1) {
    await updateCellValue(`Måltider!M${row + 2}`, "Ja");
  }
}
