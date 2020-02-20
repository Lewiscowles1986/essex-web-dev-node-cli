const log = console.log
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const inquirer = require('inquirer')

exports.command = 'calc'
exports.desc = 'Lets do some sums'
exports.handler = argv => {
  log(logSymbols.info, chalk.blue('Lets do some sums'))

  inquirer.prompt([
    {
      name: 'action',
      message: 'Select an action',
      default: { name: 'Addition', value: 'plus' },
      type: 'list',
      choices: [
        { name: 'Addition', value: 'plus' },
        { name: 'Subtraction', value: 'minus' },
        { name: 'Division', value: 'divided by' },
        { name: 'Multiplication', value: 'multiplied by' }
      ]
    },
    {
      name: 'firstNumber',
      message: 'Enter a number',
      default: 42,
      type: 'input'
    },
    {
      name: 'secondNumber',
      message: 'Enter a second number',
      default: 0,
      type: 'input'
    }
  ]).then(answers => {
    try {
      log(logSymbols.info, chalk.green(calculate(answers.action, parseInt(answers.firstNumber), parseInt(answers.secondNumber))))
    } catch (error) {
      log(logSymbols.error, chalk.red('Error performing calculation'))
    }
  })
}

const calculate = (action, a, b) => {
  switch (action) {
    case 'minus':
      return a - b
    case 'divided by':
      return a / b
    case 'multiplied by':
      return a * b
  }
  return a + b
}
