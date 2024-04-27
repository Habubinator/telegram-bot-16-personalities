require("dotenv").config();
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const creds = process.env.CREDENTIALS;
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
    async getTable() {
        try {
        } catch (error) {
            logger.logError(error);
        }
    }
}

module.exports = new gSheetsController();
