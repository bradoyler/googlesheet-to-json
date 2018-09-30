#!/usr/bin/env node
const debug = require('debug')('gSheetToJSON:cli')
const program = require('commander')
const GoogleSheetToJSON = require('../index')
const config = require(`${process.cwd()}/.gtokens.json`).web
const gSheetToJSON = new GoogleSheetToJSON(config)

// defaults
const options = {
  spreadsheetId: null,
  range: 'Sheet1',
  oAuthTokens: config.oAuthTokens
}

/** Usage */
program
  .arguments('<sheetID>')
  .option('-s, --sheet <name>', 'name of sheet, default: Sheet1')
  // .option('-c, --config <file>', 'config file, default: config.json ')
  // .option('-o, --output <file>', 'output file, default: output.json')
  .parse(process.argv)

/** Help **/
program.on('--help', function () {
  console.log('  Examples:')
  console.log()
  console.log(' $ googlesheet-to-json <spreadsheetId>')
  console.log()
})

if (program.args[0] === '?') {
  program.help()
}

if (program.sheet) {
  options.range = program.sheet
  debug('sheet name override', options.range)
}

if (program.config) {
  debug('config file override not yet implemented')
}

if (program.output) {
  debug('output file override not yet implemented')
}

if (program.args[0]) {
  options.spreadsheetId = program.args[0]
}

debug('program.args:', program.args)

function run () {
  if (!options.spreadsheetId) {
    console.log('Spreadsheet ID required')
    return
  }

  gSheetToJSON.getRows(options)
  .then((rows) => {
    console.log(JSON.stringify(rows))
  })
  .catch(console.error)
}

run()
