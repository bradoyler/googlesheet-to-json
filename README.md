# Googlesheet-to-json  
Node.js library to read a Google Sheet (v4) and convert to JSON collection

## Install
```
npm install googlesheet-to-json --save
```

### Setup Google API credentials (gtokens)
[See getting credentials](#getting-credentials)

## CLI
```
npm install -g googlesheet-to-json
googlesheet-to-json <spreadsheetId> -s 'Sheet1' > out.json
```

## API
```
const config = require('./.gtokens.json').web // see 'Getting Credentials' below
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

----
## Getting credentials

1. copy `.gtokens.example.json` -> `.gtokens.json`
1. Run [Google-Tokens](https://github.com/bradoyler/google-tokens)
1. Populate `.gtokens.json` with appropriate values
