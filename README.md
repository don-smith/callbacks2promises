# Promises

## Notes

* Emphasise _why_ promises are valuable (callback hell & return values from async functions)
* 2 parts: creating and consuming
* Approach could be to start with callbacks
* Need a good metaphor: doing favours?
* Context: multiple async functions we need to sequence
* Important syntax points:
  - resolve = then and reject = catch
  - data flows from the return (or resolution) of one function to the parameters of the next function
  -

```js
function getFileContents (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, contents) => {
      if (err) {
        reject(err)
      } else {
        resolve(contents)
      }
    })
  })
}

function transformContents (contents) {
  return JSON.parse(contents)
}

function showContents (obj) {
  console.log(obj)
}

function showError (err) {
  console.error(err)
}

getFileContents('data.json')
  .then(transformContents)
  .then(showContents)
  .catch(showError)
```
