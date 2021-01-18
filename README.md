# Promises

## Agenda

* What: a syntax for working with async JavaScript functions
* Why: code readability/maintainability
  - mitigating callback hell
  - getting return values from async functions
  - useful when working with multiple async functions
* It isn't necessarily choosing one or the other - often the decision has already been made by the library you're using, such as Knex
* Metaphor: doing favours for someone, such as borrowing a book
* Two aspects: creating and consuming
* Important syntax points:
  - resolve == then and reject == catch
  - data flows from the return (or resolution) of one function to the parameters of the next function

## Demo: From callbacks to promises

1. Read the contents of one file
2. Append the contents into a second file
3. List the contents of the second file
4. Run the script a few more times to show the increasing output

## Code illustrations

* `1-no-functions.js`: an implementation of the demo without using any named functions. This is an illustration of [callback hell](http://callbackhell.com).
* `2-better-callbacks.js`: an implementation that uses named functions to mitigate callback hell.
* `3-promises.js`: an implementation that uses Promises.
* `4-async-await.js`: an implementation that uses the `async`/`await` syntax.
