const fs = require('fs')
const path = require('path')

const source = path.join(__dirname, 'source.txt')
const destination = path.join(__dirname, 'destination.txt')

// read from source
fs.readFile(source, 'utf8', (readErr, sourceContents) => {
  if (readErr) console.error(readErr)
  // write to destination
  fs.appendFile(destination, sourceContents, 'utf8', writeErr => {
    if (writeErr) console.error(writeErr)
    // show contents of destination
    fs.readFile(destination, 'utf8', (listErr, listContents) => {
      if (listErr) console.error(writeErr)
      console.log(listContents)
    })
  })
})
