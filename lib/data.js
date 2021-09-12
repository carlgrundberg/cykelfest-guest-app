import { google } from "googleapis";

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

export async function getHostByPhone(phone) {
  const data = await getData("Måltider");

  const host = data.find((row) => row.find((cell) => cell === phone));

  if (host) {
    const [name, address, phone1, phone2, dish] = host;
    return { name, address, phone1, phone2, dish };
  }

  return null;
}

export async function getDataForHost(host) {
  const data = await getData("Gästlista");

  const row = data.find((row) => row[0] === host);

  if (row) {
    const [, , , host1, address1, host2, address2, host3, address3] = row;
    return { host1, address1, host2, address2, host3, address3 };
  }
  return null;
}
