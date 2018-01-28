# Googlesheet-to-json  
Node.js library to read a Google Sheet (v4) and convert to JSON collection

## Install
```
npm install googlesheet-to-json --save
```

### Setup Google Auth Tokens
```sh
cp config.example.json config.json
```
and populate your `config.json` with `client_id`, `client_secret` & `refresh_token`

[For more info, see getting credentials](#getting-credentials)

## CLI
```
npm install -g googlesheet-to-json
## setup config.json
googlesheet-to-json <spreadsheetId> -s 'Sheet1' > out.json
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

----
### Getting credentials
> yes, this is STILL painful

#### Option 1:
Use OAuthPlayground to get OAuth tokens

1. Goto: https://console.developers.google.com
2. Create an account
3. In the right sidebar click `Credentials`
4. Then click `Create credentials`, select `oAuth client ID`, select `Web application`
6. Name your Web Application
7. Enter `https://developers.google.com/oauthplayground` as an authorized redirect URLs
8. Have your `Client ID` and `Client secret` ready
9. Go to [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/)
10. Under `Step 1` authorize all `Google Sheets API v4`
11. Click the Gear button in upper right of the page and check `Use your own OAuth credentials`
13. Enter your `Client ID` and `Client secret`
14. Click `Authorize APIs`
15. Then request auth tokens, grab generated the `refresh token`.
16. Save your `client_id`, `client_secret` & `refresh_token` somewhere

#### Option 2:
- [Google-OAuth2-Token](https://github.com/h2non/google-oauth2-token) - Get a fresh OAuth2 token for Google APIs in just one command

#### Option 3:
- [OAuth2L](https://github.com/google/oauth2l)
(uses Python) - a simple CLI for interacting with Google oauth tokens.
