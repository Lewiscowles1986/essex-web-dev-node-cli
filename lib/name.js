const log = console.log
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const inquirer = require('inquirer')
const axios = require('axios')

exports.command = 'getNames [nation] [num]'
exports.desc = 'Get some ideas for our new name'
exports.handler = argv => {
  const maxNumberOfSuggestions = parseInt(argv.num) || 10
  const nation = argv.nation || 'england'
  log(logSymbols.info, chalk.blue(`Fetching ${maxNumberOfSuggestions} names from remote source for ${nation}...`))

  inquirer.prompt([
    {
      name: 'name',
      message: 'Select a name',
      type: 'list',
      choices () {
        const url = `https://uinames.com/api/?amount=${maxNumberOfSuggestions}&region=${nation}`
        return axios.get(url, { headers: { Accept: 'application/json' } }).then(response => {
          return response.data.map(nameObject => nameObject.name)
        }).catch(() => {
          return null
        })
      }
    }
  ]).then(inputs => {
    log(logSymbols.success, chalk.green(`Out of ${maxNumberOfSuggestions}, you picked '${inputs.name}'... I hope you're proud of yourself`))
  }).catch(_err => {
    log(logSymbols.error, chalk.red("Did you say your name was 'Not sure'?"))
  })
}
