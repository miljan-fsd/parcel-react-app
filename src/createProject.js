const ncp = require('ncp').ncp;
const colors = require('colors')
const { exec } = require('child_process')
const process = require('process')
const fs = require('fs')
const path = require('path')

module.exports = function createProject(projectName, author, styleType) {

  const projectPath = String(process.cwd())
  const source = path.join(__dirname, `templates/${styleType}`)
  const destination = path.resolve(projectPath, projectName)

  ncp(source, destination, (err) => {
    if (err) return console.log(err);

    const newProject = `${projectPath}/${projectName}`.cyan;

    console.log(`\nSuccessfully created a new project at ${newProject}`)

    fs.readFile(path.resolve(projectPath, projectName, 'package.json'), (err, data) => {
      if (err) return console.log(err)


      let result = JSON.parse(data)

      result.name = projectName
      result.author = author

      result = JSON.stringify(result, null, 2)

      fs.writeFile(path.resolve(projectPath, projectName, 'package.json'), result, err => {
        if (err) return console.log(err)
      })
    })

    fs.createReadStream(path.resolve(source, '.gitignore'))
      .pipe(fs.createWriteStream(path.resolve(destination, '.gitignore')));

    console.log('\n Installing dependencies with npm, please wait... \n')

    let installPackages = exec(`cd ${projectName} && npm install`, err => {
      if (err) return console.log(err)
    })

    installPackages.stdout.on('data', data => console.log(data.toString()))

    installPackages.on('exit', code => {
      if (code === 0) {
        console.log('Start your app:')
        console.log(`\n cd ${projectName} \n\n npm run dev \n`.cyan)
        console.log('Happy coding!')
      }
    })
  })

}
