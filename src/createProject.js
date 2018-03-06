const { ncp } = require('ncp')
const chalk = require('chalk')
const { exec } = require('child_process')
const process = require('process')
const fs = require('fs')
const path = require('path')

module.exports = function createProject(projectName, author, styleType) {
  const projectPath = String(process.cwd())
  const source = path.join(__dirname, `templates/${styleType}`)
  const destination = path.resolve(projectPath, projectName)

  ncp(source, destination, err => {
    if (err) return console.log(err)

    const newProject = chalk.cyan(`${projectPath}/${projectName}`)

    console.log(`\nSuccessfully created a new project at ${newProject}`)

    fs.readFile(
      path.resolve(projectPath, projectName, 'package.json'),
      (err, data) => {
        if (err) return console.log(err)

        let result = JSON.parse(data)

        result.name = projectName
        result.author = author

        result = JSON.stringify(result, null, 2)

        fs.writeFile(
          path.resolve(projectPath, projectName, 'package.json'),
          result,
          err => {
            if (err) return console.log(err)
          }
        )
      }
    )

    fs
      .createReadStream(path.resolve(__dirname, 'templates/.npmignore'))
      .pipe(
        fs.createWriteStream(
          path.resolve(projectPath, projectName, '.gitignore')
        )
      )

    console.log('\n Installing dependencies with npm, please wait... \n')

    const installPackages = exec(`cd ${projectName} && npm install`, err => {
      if (err) return console.log(err)
    })

    installPackages.stdout.on('data', data => console.log(data.toString()))

    installPackages.on('exit', code => {
      if (code === 0) {
        console.log(
          'Start your app:' +
            chalk.cyan(`\n\n cd ${projectName} \n\n npm run dev \n\n`) +
            'Happy coding!'
        )
      }
    })
  })
}
