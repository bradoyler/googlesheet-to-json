const config = require('../config.json').google
const GoogleSheetToJSON = require('../index')
const gSheetToJSON = new GoogleSheetToJSON(config)
// raw url: https://docs.google.com/spreadsheets/d/<id>/edit
// test IDs: 1INGc-QFBfCS0raSZgprennLRvJ8YWJHCV4YmuEkYoP4, 1VyW9UkLEUBUZl5UIHAX7BcDAxcq41ab8lZNCILzATgE

const options = {
  spreadsheetId: '1GubCzKc-HZ8clsCmB1ARawqE9Wjx-b1xm73KhoE-Jlw',
  range: 'Sheet1',
  oAuthTokens: config.oAuthTokens
}

gSheetToJSON.getRows(options)
.then((rows) => {
  console.log('rows:', rows)
  console.log('row count:', rows.length)
})
.catch(console.error)
