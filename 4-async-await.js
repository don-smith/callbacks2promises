const fs = require('fs')
const path = require('path')

const source = path.join(__dirname, 'source.txt')
const destination = path.join(__dirname, 'destination.txt')

// Unlike the other 3 files, this file
// uses the promises interface of the fs
// functions instead of their callback interfaces.

async function getSourceContents () {
  return fs.readFile(source, 'utf8')
}

async function appendToDestination (contents) {
  return fs.appendFile(destination, contents, 'utf8')
}

async function showDestination () {
  return fs.readFile(destination, 'utf8')
}

function showError (err) {
  // eslint-disable-next-line no-console
  console.error(err)
}

// this is called an IIFE (pronounced if-ee)
(async () => {
  try {
    const contents = await getSourceContents()
    await appendToDestination(contents)
    await showDestination()
  } catch (err) {
    showError(err)
  }
})() // IIFE (immediately invoked function expression)
