const fs = require('fs')
const path = require('path')

const source = path.join(__dirname, 'source.txt')
const destination = path.join(__dirname, 'destination.txt')

function getSourceContents () {
  return new Promise((resolve, reject) => {
    fs.readFile(source, 'utf8', (err, contents) => {
      err ? reject(err) : resolve(contents)
    })
  })
}

function appendToDestination (contents) {
  return new Promise((resolve, reject) => {
    fs.appendFile(destination, contents, 'utf8', err => {
      err ? reject(err) : resolve()
    })
  })
}

function showDestination () {
  return new Promise((resolve, reject) => {
    fs.readFile(destination, 'utf8', (err, contents) => {
      // eslint-disable-next-line no-console
      err ? reject(err) : resolve(console.log(contents))
    })
  })
}

function showError (err) {
  // eslint-disable-next-line no-console
  console.error(err)
}

getSourceContents()
  .then(appendToDestination)
  .then(showDestination)
  .catch(showError)
