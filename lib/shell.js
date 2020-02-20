const log = console.log
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const shell = require('shelljs')

exports.command = 'rename <newName>'
exports.desc = 'Rename the readme title(s)'
exports.handler = argv => {
  log(logSymbols.info, chalk.blue(`Thanks, updating the titles to say ${argv.newName}`))
  shell.sed('-i', /^#(.*)/gim, `# ${argv.newName}`, 'README.MD')
}
