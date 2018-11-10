# Googlesheet-to-json  
Node.js library to read a Google Sheet (v4) and convert to JSON collection

## Install
```
npm install googlesheet-to-json --save
```

### Setup Google API credentials (Service Account)
[See getting credentials](#getting-credentials)

## CLI
```
npm install -g googlesheet-to-json
googlesheet-to-json <spreadsheetId> -s 'Sheet1' > out.json
```

## API
```
// see 'Getting Credentials' below
const { private_key, client_email } = require('./googleServiceAccount.json')
const GoogleSheetToJSON = require('googlesheet-to-json')
const gSheetToJSON = new GoogleSheetToJSON({ private_key, client_email })

const spreadsheetId = '1gTERIVPV_0yoMXc6mlBtBpNvaoH5pIU2IC-75V_Qcas'
const range = 'Sheet1'

gSheetToJSON.getRows({ spreadsheetId, range })
 .then(rows => console.log('rows:', rows))
 .catch(console.error)
```

----
## Getting credentials

1. Login to [Google API console](https://console.developers.google.com) 
1. Create 'Service Account' credentials @ https://console.developers.google.com/apis/credentials
1. Download credentials json file and rename to `googleServiceAccount.json`
1. Copy `googleServiceAccount.json` to root of your project and add to `.gitignore`
