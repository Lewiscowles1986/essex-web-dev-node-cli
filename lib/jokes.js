const log = console.log
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const axios = require('axios')

exports.command = 'getJoke'
exports.desc = 'Fetch highly amusing jokes'
exports.handler = argv => {
  log(logSymbols.info, chalk.blue('Jokes from your dad'))
  const url = 'https://icanhazdadjoke.com/'
  axios.get(url, { headers: { Accept: 'application/json' } })
    .then(response => {
      log(logSymbols.success, chalk.green(response.data.joke))
    }).catch(() => {
      log(logSymbols.error, chalk.red('Error getting joke'))
    })
}
