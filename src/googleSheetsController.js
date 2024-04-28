const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const creds = JSON.parse(process.env.CREDENTIALS);
const serviceAccountAuth = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
    "1NLxzekPP-dxExWPNRqYEecRIhTPxtvVuz8jA-SVhItU",
    serviceAccountAuth
);

const logger = require("./logger");

class gSheetsController {
    async getTableData(personalityType) {
        try {
            await doc.loadInfo();
            const sheet = doc.sheetsByIndex[0];
            const rows = await sheet.getRows();
            for (const row of rows) {
                if (row.get("Тип") == personalityType) {
                    return row.toObject();
                }
            }
            return {
                error: `Произошла какая-то ошибка. В таблице не оказалось типа личности ${personalityType}`,
            };
        } catch (error) {
            logger.logError(error);
        }
    }
}

module.exports = new gSheetsController();
