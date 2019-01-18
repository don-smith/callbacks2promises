const fs = require('fs')
const path = require('path')

const source = path.join(__dirname, 'source.txt')
const destination = path.join(__dirname, 'destination.txt')

fs.readFile(source, 'utf8', (readSourceErr, sourceContents) => {
  // eslint-disable-next-line no-console
  if (readSourceErr) return console.error(readSourceErr)
  fs.appendFile(destination, sourceContents, 'utf8', appendErr => {
    // eslint-disable-next-line no-console
    if (appendErr) return console.error(appendErr)
    fs.readFile(destination, 'utf8', (readDestinationErr, destinationContents) => {
      // eslint-disable-next-line no-console
      if (readDestinationErr) return console.error(readDestinationErr)
      // eslint-disable-next-line no-console
      console.log(destinationContents)
    })
  })
})
