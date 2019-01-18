const fs = require('fs')
const path = require('path')

const source = path.join(__dirname, 'source.txt')
const destination = path.join(__dirname, 'destination.txt')

function getSourceContents (callback) {
  fs.readFile(source, 'utf8', (err, contents) => {
    err ? showError(err) : callback(contents)
  })
}

function appendToDestination (contents, callback) {
  fs.appendFile(destination, contents, 'utf8', err => {
    err ? showError(err) : callback()
  })
}

function showDestination (callback) {
  fs.readFile(destination, 'utf8', (err, contents) => {
    // eslint-disable-next-line no-console
    err ? showError(err) : console.log(contents)
  })
}

function showError (err) {
  // eslint-disable-next-line no-console
  console.error(err)
}

getSourceContents(contents => {
  appendToDestination(contents, () => {
    showDestination()
  })
})
