const { google } = require('googleapis')

const scopes = [
  // 'https://www.googleapis.com/auth/spreadsheets',
  // 'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/drive.readonly'
]

function gSheetToJSON ({ client_email, private_key }) {
  if (!client_email || !client_email) { // eslint-disable-line
    throw new Error('Missing credentials')
  }

  const client = new google.auth.JWT(client_email, null, private_key, scopes)
  this.sheets = google.sheets({ version: 'v4', auth: client })
}

gSheetToJSON.prototype.getJson = function getJson ({ spreadsheetId, range }) {
  const sheets = this.sheets
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get({ spreadsheetId, range }, (err, response) => {
      if (err) {
        return reject(err)
      }
      resolve(response)
    })
  })
}

gSheetToJSON.prototype.getRows = function getRows ({ spreadsheetId, range }) {
  return this.getJson({ spreadsheetId, range })
  .then(res => {
    const { data } = res
    return data.values.slice(1).map((item) => {
      const cols = data.values[0]
      const row = {}
      item.forEach((cell, idx) => {
        row[cols[idx]] = cell
      })
      return row
    })
  })
}

gSheetToJSON.prototype.getFileInfo = function getFileInfo ({ spreadsheetId }) {
  const sheets = this.sheets
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.get({ spreadsheetId }, (err, response) => {
      if (err) {
        return reject(err)
      }
      resolve(response)
    })
  })
}

module.exports = gSheetToJSON
