#!/usr/bin/env node

'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')

const process = require('process')
const fs = require('fs')
const path = require('path')

const createProject = require('./src/createProject')

const projectQuestions = [
  {
    message: 'Enter project name?',
    type: 'input',
    name: 'projectName',
    validate: function(input) {
      if (input.match(/^[\W\_]/) || input === '') {
        return '"Project name" could not be empty or start with a non-word character.'
      } else {
        return true
      }
    }
  },
  {
    message: 'Enter your name?',
    type: 'input',
    name: 'author',
    validate: function(input) {
      if (input.match(/[^\w\s\']/) || input === '') {
        return '"Your name" cannot contain non-word characters.'
      } else {
        return true
      }
    }
  },
  {
    message: 'What style type do you want to use in the project?',
    type: 'list',
    name: 'style',
    choices: ['css', 'scss', 'css-modules', 'styled-components']
  }
]

const arg = String(process.argv.splice(2, 1))

if (arg === '--version' || arg === '-V') {
  fs.readFile(path.resolve(__dirname, 'package.json'), (error, data) => {
    let res = JSON.parse(data)
    return console.log(res.version)
  })
} else if (arg === '--help' || arg === '-h') {
  console.log(`
  Usage: parcel-react-app [options]\n
    -V, --version \n\toutput the version number
    new \n\tcreate a new project
    -h, --help \n\toutput usage information
  `)
} else if (arg === 'new') {
  inquirer
    .prompt(projectQuestions)
    .then(answers =>
      createProject(answers.projectName, answers.author, answers.style)
    )
} else {
  console.log(
    `${chalk.red('Not valid input.')} Try -h or --help for more information.`
  )
}
