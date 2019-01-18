# Promises

## Agenda

* What: a syntax for working with async JavaScript functions
* Why: code readability/maintainability
  - mitigating callback hell
  - getting return values from async functions
  - useful when working with multiple async functions
* Two aspects: creating and consuming
* Metaphor: doing favours for someone, such as borrowing a book
* It isn't necessarily choosing one or the other - often the decision has already been made by the library you're using, such as Knex
* Important syntax points:
  - resolve == then and reject == catch
  - data flows from the return (or resolution) of one function to the parameters of the next function

## Demo: From callbacks to promises

1. Read the contents of one file
2. Append the contents into a second file
3. List the contents of the second file
4. Run the script a few more times to show the increasing output

## Steps

1. Start with writing it all out in a single file with no functions

```js
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
```

2. Show an example of how we can reduce callback hell and make the code more readable/maintainable by using named functions.

3. Next, show how readable the the code can be when we use Promises. We got the function names by just describing what we want to do (in camelCase form).

```js
getSourceContents()
  .then(appendToDestination)
  .then(showDestination)
  .catch(showError)
```

4. Create functions for `getSourceContents`, `appendToDestination` and `showDestination` that return Promises. When writing these functions, only think about what they need and what they return.

to be continued ...
