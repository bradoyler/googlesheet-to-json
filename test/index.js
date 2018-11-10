const { client_email, private_key } = require('../googleServiceAccount.json')
const GoogleSheetToJSON = require('../index')
const gSheetToJSON = new GoogleSheetToJSON({ client_email, private_key })
// raw url: https://docs.google.com/spreadsheets/d/<id>/edit
// test IDs: 1INGc-QFBfCS0raSZgprennLRvJ8YWJHCV4YmuEkYoP4, 1VyW9UkLEUBUZl5UIHAX7BcDAxcq41ab8lZNCILzATgE

const spreadsheetId = '1zRBraEIAA-Zo7-0Upi9BbyF4-qp8-KuXoPZbORM5J00'
const range = '2016Races'

gSheetToJSON.getRows({ spreadsheetId, range })
.then((rows) => {
  console.log('rows:', rows)
  console.log('row count:', rows.length)
})
.catch(err => console.error(err.message))
