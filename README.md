# Googlesheet-to-json  
Node.js library to read a Google Sheet (v4) and convert to JSON collection

## Install
```
npm install googlesheet-to-json --save
```

## CLI
```
npx googlesheet-to-json <spreadsheetId> -r 'Sheet1' -c config.json -o output.json
```

## API
```
const config = require('./config.json').google // see 'Getting Credentials' below
const GoogleSheetToJSON = require('googlesheet-to-json')
const gSheetToJSON = new GoogleSheetToJSON(config)

const options = {
    spreadsheetId: '1gTERIVPV_0yoMXc6mlBtBpNvaoH5pIU2IC-75V_Qcas',
    range: 'Sheet1',
    oAuthTokens: config.oAuthTokens
}

gSheetToJSON.getRows(options)
.then((rows) => {
  console.log('rows:', rows)
})
.catch(console.error)
```
