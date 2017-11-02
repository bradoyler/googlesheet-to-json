const google = require('googleapis')

function gSheetToJSON ({ redirect_urls: redirects, client_id: id, client_secret: secret }) {
  if (!id || !secret) {
    throw new Error('Missing client_id or client_secret')
  }

  const { OAuth2 } = google.auth
  const redirectUrls = (redirects && redirects[0]) ? redirects[0] : ['']
  this.oauth2Client = new OAuth2(id, secret, redirectUrls)
  this.sheets = google.sheets({ version: 'v4', auth: this.oauth2Client })
}

gSheetToJSON.prototype.getJson = function getJson ({ spreadsheetId, range, oAuthTokens }, callback) {
  this.oauth2Client.setCredentials(oAuthTokens)
  const sheets = this.sheets
  return new Promise(function (resolve, reject) {
    sheets.spreadsheets.values.get({ spreadsheetId, range }, (err, response) => {
      if (err) {
        return reject(err)
      }
      resolve(response)
    })
  })
}

gSheetToJSON.prototype.getRows = function getRows ({ spreadsheetId, range, oAuthTokens }, callback) {
  return this.getJson({ spreadsheetId, range, oAuthTokens })
  .then((json) => {
    return json.values.slice(1).map(function (item) {
      const cols = json.values[0]
      const row = {}
      item.forEach((cell, idx) => {
        row[cols[idx]] = cell
      })
      return row
    })
  })
}

gSheetToJSON.prototype.getFileInfo = function getFileInfo ({ oAuthTokens, spreadsheetId }, callback) {
  this.oauth2Client.setCredentials(oAuthTokens)
  this.sheets.spreadsheets.get({ spreadsheetId }, (err, doc) => callback(err, doc))
}

module.exports = gSheetToJSON
