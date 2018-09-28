# Changelog

## v0.9.0

> **Notice:** All deprecated functions will be removed in the v0.10.0 release

### Breaking Changes

- `isEqual` now takes order of arrays into consideration and will return false if arrays do not match in order
- `when` is no longer a maybe return and should give back the original data passed in. It also supports only a single param passed in
- New `List` type for similar functions that apply to a List of characters (string) and a List of items (Array)
  - `slice` has been moved to this type
  - `includes` has been moved to this type
  - `concat` has been moved to this type
  - `reversed` has been moved to this type
  - `nth` has been moved to this type
- `concat` flow changed a little bit to work more like built in concat
  - In order to achieve array type simply use `concatMap` like so: `concatMap(x => x, [[1, 2], [3, 4], [5, 6]])`
- `range` now requires you to pass 2 params to it, it is curried out of the box as well.
- The parameters for `gt`, `gte`, `lt` and `lte` have been flipped to meet the proper data last structure

### Deprecated

- `pluck` : Shaky code stack, and lack of use cases that `props` and `prop` can't handle
- `strip` : No real use cases to benefit from this
- `empty` : No real use cases to benefit from this
- `contains` : Use `includes` within the list type

### Fixed

- `filter` had incorrect data types within its documentation
- `when` documentation typos and no longer hard to read

### New

- Added `always` function which takes 2 params and always returns the first one. Good for pipes since its curried
- Added `compose` function (finally)
- Added `unless` function which takes 3 params, and acts the opposite of `when`
- Added `split` function which takes a char and a string and splits the string based on the char
- Added `takeWhile` function which will take values from an array based on a function boolean
- Added `dropWhile` function which will drop values from an array based on a function boolean
- Added `apply` function which takes an array of data and applys a function to it
- Added `either` function which takes 2 functions and a value and if either function returns truthy will return true
- Added `endsWith` function which checks if the passed in list ends with the given value

### Improved

- Documentation for `includes` and `identity` functions
- Removed unused code (`circular` and `isObject`)
- Added handling for an edge case with `Object.keys` inside of `isEqual`

## v0.8.3

### New

- Added `isPrime` function which accepts a number and determines if its prime or not
- Added `factors` function which accepts a number and finds its factors

### Improved

- Tweaked `range` handling and flow to work better with `factors`

### Fixed

- Case where passing a string number to range might produce weird results

## v0.8.2

### Fixed

- No longer packaging unwanted items like coverage results

### Improved

- Slightly the build process of the module (pre-publish/release anyway)

## v0.8.1

### New

- Added 2nd level Modularity you can now request sections of the library by type
  - Example: `import KO from 'kyanite/object` See the `Modular By Datatype` section of the readme

### Fixed

- Documentation spelling error for `path`
- Documentation is now Consistent to the linter and the rest of the module

## v0.8.0

### Breaking Changes

- `assign` is now curried and expects a minimum of 2 values passed in

### Deprecated

- `deepClone` : Use `clone` instead, to mimic the deep clone functionality do this: `clone({ a: 1 }, true)`

### New

- Added new `clone` function, it can create a shallow clone for Objects however accepts a 2nd param to use deep clone capabilities
- New `unzip` function which takes an object and breaks down into two arrays one of keys and one of values

### Improved

- Re wrote the assign function using `Object.keys` to remove the need for `for in` looping and checking `hasOwnProperty`
- Slight tweaks to `has` and `assign` unit tests
- Added function names to descriptions of tests to verify what is testing what
- Further unit test improvements

### Fixed

- The documentation for `when` was missing a description, this has been addressed

## v0.7.1

### Improved

- Replaced null check within `defaults` with `isNil` to keep non strict to a minimum

## v0.7.0

### BREAKING CHANGES

- Swapped param usage for `div` functionality
  - Ex: `div(4, 2) // => 2` should now be `div(2, 4) // => 2`

### New

- Added number `pow` function which takes an exponent and base number and rises the number to the exponents value
- Added number `rem` function which finds the remainder of two numbers
- Added number `isOdd` function which checks if the provided number is odd or not
- Added number `isEven` function which checks if the provided number is even or not
- Added string `toUpper` function which transforms a string to all upper case
- Added string `toLower` function which transforms a string to all lower case

### Improved

- Removed unreachable code block from equals functionality

### Fixed

- Coverage for `tail` and `head` functions

## v0.6.0

### BREAKING CHANGES

- Completely re wrote `sift` to act as a for real filter, instead of another `omit`
- Complete re work of `isEqual` in an attempt to make it much more lightweight
  - IMPORTANT: This method will no longer handle/care about recursive data in objects so if you are comparing potential circular/recursive data you will get a memory stack error
  - It can still compare Primitive types, as well as Arrays, Objects, Dates, RegExp, and memory like Promises
  - Dropped support for items like Object based Booleans/Strings (`new Boolean`), Maps, Errors, And a lot of the really super rare edge cases

### Fixed

- Compatibility patch for using `isEqual` in IE
- Documentation bug not showing arguments for functions
- fuzzySearch param naming in documentation was inconsistent

### New

- Added a new `draft` function for objects which essentially applies a provided function to all of the values within an object (essentially an object map)
- Re categorized `fuzzySearch` as a String function rather than a normal function

### Improved

- `isEqual` gained a lot of improvements to performance, this is also dependent on the size/format of the data being compared
- `isEqual` file size has dropped by a lot with the new re write

## v0.5.0

### BREAKING CHANGES

- Tweaked how `max` was running it's comparisons
- Tweaked how `min` was running it's comparisons

### New

- Added `head` function for objects, which pulls the first value from it
- Added `tail` function for objects, which pulls the last value from it
- Added `maxBy` function which applies a function to each value before comparing the max
- Added `minBy` function which applies a function to each value before comparing the min
- Added `zip` function which takes two arrays and turns them into an object key value pair

## v0.4.1

### Fixed

- `fuzzySearch` algorithm is stable again and extremely more accurate than before
  - I may need to look into a better solution than I currently have for it however

### Improved

- Added more complex testing strings to `fuzzySearch` tests

## v0.4.0

### BREAKING CHANGES

- Renamed `gets` to `props` to meep the convention consistent
- Renamed `includes` to `contains` for strings (swapped with array)
- Renamed `contains` to `includes` for arrays (swapped with string)
- Removed `deepClone` because `assign` ultimately generates a brand new object when ran

### New

- Added `join` string function which accepts a string and an array to generate a joined string
- Added `branch` function which takes 3 functions and a value, and will run either the 2nd or 3rd function based on if the first passes
- Added `ap` function which takes an array of functions to be applied to an array of data, concating the results together
- Added `on` function which takes 2 functions and 2 values, applies the 2nd function to both values and then applies the first function onto those

### Changes

- Converted the function used by compact to just be `identity`
- Added some slight test additions to `pipe`
- Tweaked documentation automation to make sure the main site is always up to date

## v0.3.0

### Changes

- Re organized the `src` and `test` folder contents into seperate folders based on category
  - This is no way affects usage, you can still do `import isEmpty from 'kyanite/isEmpty'` it's more to make it easier to work with and avoid duplication
- `findIndex` returns a maybe, so instead of a -1 if no index is found it will return `undefined`
- The `src` folder is now included on install, so if you want to use the es6 versions of the module, you can import them from `kyanite/src/type/function`
  - An example might be for curry it'd be: `import curry from 'kyanite/src/function/curry'`

### Fixes

- A few documentation fixes which also involved some missing information/categories

## v0.2.2

### New

- Added `encase` which encases the provided function with try catch to safely execute the function
- Added `drop` which takes an array and drops the requested number of values from the front
- Added `take` which pulls values from an array up until the point specified (the opposite of drop)
- Added `sortWith` which takes an array of functions and goes through the array when it encounters ties with the data while sorting it

## v0.2.1

### New

- Added `findIndex` function which takes a function and array and returns the first value from the array that passes the function
- Added `groupBy` function which groups the values of an array into common properties of an object
- Added `sortBy` function which sorts an array based on the values when ran through a function
- Added `descendBy` function which accepts a function to run against values for sorting in descending order
- Added `ascendBy` function which accepts a function to run against values for sorting in ascending order

## v0.2.0

### New

- Added `ascend` function which can be used with sort for ascending order
- Added `descend` function which can be used with sort for descending order
- Added `both` function which accepts 2 functions and a value, returns true if both functions pass, otherwise returns false

### Improved

- Added ability to handle string numbers to `add` function

## v0.1.0

### BREAKING CHANGES (If converting from dusty-fns)

- `fuzzySearch` params have been swapped, so now its `fuzzySearch(needle, haystack)` instead
- Renamed `removeAt` to just  `remove`
- Renamed `replaceAt` to just `update`
- `flatten` has been removed, consider using `concat` and `concatMap` instead
- `uniq` now only looks for an array, use `uniqBy` in order to use the old functionality
- Removed `clone` since `assign` is essentially the same thing with more capabilities
- Function params passed to `juxt` should now be contained within a single array
- Changed the return of `mean` so it returns 0 instead of `NaN` for bad arguments passed in
- `isEmpty` now handles values such as `null`, `undefined`, `NaN`, and `Booleans` it will return `true` for ALL of these
- `empty` no longer throws an error for non "emptyables". Instead it returns `undefined`

### Fixed

- Addressed copy and paste errors for `prepend` docs
- Addressed several documentation errors

### Improved

- Some more tweaks to internal documentation scripts
- Replaced `ava` and converted back to `tape` (Yay!)
- `max` now uses `last` internally instead of `nth` should improve is seperate build size/performance
- `min` now uses `first` internally instead of `nth` should improve is seperate build size/performance
- Removed `functionName` internal since it's no longer being used
- Improved build size of `isEqual` by removing impossible logic
- Added onto `identical` documentation with more examples
- Re-wrote `assign` for better optimization,

### New

- Added `path` function to safely navigate objects that may or may not have properties
- Added `sift` function which works a lot like `filter` but with `Object` data types
- Added `whole` function which works a lot like `every` but with `Object` data types
- Added `any` function which works a lot like `some` but with `Object` data types
- Added `insert` function which inserts a data value into a specified index of an array
- Added `height` function which works like length, however it handles object data types
- Added `gets` function which goes through an object to pull values requested in an array
- Added `plan` function which takes a schema object of functions to apply to a matching object of data
- Added `gt` function which compares the passed in values to determine if one is greater than the other
- Added `gte` function which compares the passed in values to determine if one is greater than or equal to the other
- Added `lt` function which compares the passed in values to determine if one is less than the other
- Added `lte` function which compares the passed in values to determine if one is less than or equal to the other
- Added `when` function which uses a logic function to trigger an action function if the arguments are true
- Added `concat` function which concats the values of an array to a new array
- Added `concatMap` function which applies a function to the values of an array and concats them
- Added `compact` function which takes an array and removes all falsy values from it
- Added `uniqBy` function which does what the original `uniq` was built to do
