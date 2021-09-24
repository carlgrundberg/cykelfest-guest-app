import { google } from "googleapis";
import timestamps from "./timestamps";

export async function getData(range) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
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

const onlyNumbers = (num) => num.replace(/[\D]+/g, "");

export async function getHostByPhone(phone) {
  const phoneNumber = onlyNumbers(phone);
  const data = await getData("Måltider");

  const host = data.find((row) =>
    row.find((cell) => onlyNumbers(cell).includes(phoneNumber))
  );

  if (host) {
    const [name, address, phone1, phone2, dish] = host;
    return { name, address, phone1, phone2, dish };
  }

  return null;
}

export async function getHosts(hosts) {
  const data = await getData("Måltider");

  const hostsData = data.filter((row) => hosts.includes(row[0]));

  return hostsData.map((data) => {
    const [name, address, phone1, phone2, dish] = data;
    return { name, address, phone1, phone2, dish };
  });
}

export async function getDataForHost(host) {
  const data = await getData("Gästlista");

  const row = data.find((row) => row[0] === host);

  if (row) {
    const [, , , host1, , host2, , host3] = row;

    const hosts = await getHosts([host1, host2, host3]);

    const now = new Date();

    const obj = {
      host1: false,
      host2: false,
      host3: false,
    };

    if (host1 === host || now > timestamps[0]) {
      obj.host1 = hosts.find((h) => h.name === host1);
    }

    if (host2 === host || now > timestamps[1]) {
      obj.host2 = hosts.find((h) => h.name === host2);
    }

    if (host3 === host || now > timestamps[2]) {
      obj.host3 = hosts.find((h) => h.name === host3);
    }

    return obj;
  }
  return null;
}
