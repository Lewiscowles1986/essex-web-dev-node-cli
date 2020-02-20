const log = console.log
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const figlet = require('figlet')

exports.command = 'test'
exports.desc = 'Testing command'
exports.handler = argv => {
  log(logSymbols.info, chalk.blue('Test'))
  log(figlet.textSync('Hello World'))
}
