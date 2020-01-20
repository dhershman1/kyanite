# Changelog

## v1.1.0

### Improved

- More typing improvements, most of the function params should now default to any, making the library easier to use in typescript lang
- More tests and examples for `reduce`

### New

- Added a `pluck` function which returns a new array by plucking the same named property off all objects in the array supplied

## Fixed

- Documentation types for `map`

## v1.0.2

### Improved

- Improved some of the typings for functions

## v1.0.1

### Improved

- Added more examples to `isNil`

### Fixed

- Typo in `isNil` examples

## v1.0.0

### BREAKING CHANGES

- `size` was removed you can use `count` instead
- `factors` no longer handles negative numbers (see improved section)
  - This can be accounted for with using the `negate` function
- `apply` only take a single param instead of an array of params now
  - You can use `applyN` instead if you wish to use the old functionality

### New

- Added a `withDefaults` function which will populate an object with default values if they don't exist within the data provided
- Added a `multiples` function
  - Stress testing seems to point that it can handle up to 300 million limits in about 1.4s, but anything 400mil+ breaks the stack heap
  - If you need to go that high may be wise to look into an arithmatic library
- Added `applyN` which is taking over `apply`'s old functionality

### Improved

- All dependencies upgraded and audit fixes added
- Added some extra unit tests
- Large optimizations for `factors` re wrote the function and it should be able to handle extremely large numbers now
  - You won't see a huge performance boost on normal numbers within the hundred thousands maybe a few miliseconds this change was mostly to enhance factors so it can handle big integers better
  - Note: This does not mean the new `BigInt` data type
- Switched over to use the [pinet](https://github.com/dhershman1/pinet#readme) engine for building the docs
- Cleaned up `isPrime` slightly, debating if the trial division approach is still best or not

### Fixed

- CI breaking the CNAME definitions

## v0.14.0

### BREAKING CHANGES

- Removed `memoizeWith` since it was more of a POC from ramda's code base
  - I will most likely look into re adding it with my own code if the need is there right now I just don't see it

### New

- Added `startsWith` function, which should work just like `endsWith` but with the beginning of a list.

### Fixed

- `isPrime` should handle edge cases like 0 a correctly now and return false instead of 0 (#121)
- `endsWith` signature to reflect list instead of Array

## v0.13.0

### BREAKING CHANGES

- `find` has gone back to returning `undefined` instead of `null` for not found values

### New

- Added `fold` function which runs a `reduce` without an initial accumulator
- Added the `propOr` Function which returns the value of a property from an object or the provided default value
- CircleCI will now handle publishing the documentation to the `gh-pages` branch

### Fixed

- Documentation for functions showing up `deprecated` when they were actually not
- Documentation for `join` moved it to the `Array` Category, and fixed a typo in it's example
- Documentation for `apply` showed incorrect curry examples

### Improved

- `min` is now using the `fold` function
- Finally improved the documentation process so now documentation changes won't flood the PRs!

## v0.12.2

### New

- Added `propEq` function which takes a object property value and compares it against a given value to see if it's equal
- Added `notEq` function which checks if the provided values are not equal to each other

### Fixed

- The documentation for `and` should now reflect correctly on the return and params

## v0.12.1

### Fixed

- `pathOr` and `path` breaking on `null` value

## v0.12.0

### BREAKING CHANGES

- `ascend` and `descend` are no longer curried since they're meant to be sort based functionality and will always be called with their 2 params
  - The reasoning behind this is primarily performance, when using the function as intended there is a significant drop in performance
  - **Note**: `ascendBy` and `descendBy` have kept their curried status

### New

- Added a `median` function which gets the median of an array of numbers
- Added a `mod` function which behaves like a modulo would in actual mathematics
- Added `somePass` function which takes an array of functions and passes a value through them until one passes or the end is reached
- Added `everyPass` function which takes an array of functions and passes a value through until one fails or the end is reached
- Added `chunk` function which chunks an array of data into smaller arrays

### Improved

- `pipe` & `pipeP` are now using the Kyanite `reduce` giving them a small performance boost

### Fixed

- Fixed a lot of signature displays through out the docs
- Documentation Fixes:
  - `addIndex` description tweaks
  - `memoizeWith` added [RamdaJs](https://ramdajs.com) credit since it's based mostly off their version
  - `lt`, `lte`, `gt`, and `gte` all had invalid examples in their documentation. This is addressed now
  - `find` and `deepEq` examples were incorrect

## v0.11.3

### New

- Added `sum` function which takes an array of numbers and adds them together
  - TS type added
- Added `product` function which takes an array of numbers and multiplies them together
  - TS type added
- Switched over to [Circleci](https://circleci.com/) and [Codecov](https://codecov.io/)

### Fixed

- TS types
  - Added `addIndex` type
  - Added `memoizeWith` type
- `addIndex` Documentation
- `slice` Documentation

## v0.11.2

### New

- Added a `addIndex` function which can be used on `map`, `filter`, or `reduce` like functions to have them return the index and full list back to your callback function
- Re added the `amend` function (for now?)
- Added `memoizeWith` function

## v0.11.0 (0.11.1)

### Breaking Changes

- `factors` output has changed to be inclusive, it also works with negative numbers now
  - Example: `factors(-36) // => [1, 2, 3, 4, 6, 9, 12, 18, 36]`
  - You can easily get negative factors with `negate` and `map`
    - e.g: `map(negate, factors(-36)) // => [-1, -2, -3, -4, -6, -9, -12, -18, -36]`
- `empty` (and `isEmpty` until its removed) will now throw a type error for unsupported types
  - `empty` supports the same types as `count` as well as `null` and `undefined`
  - e.g: `empty(1) // => TypeError: Unsupported type: Number`
- `juxt` functionality changes. It's now a 2 param curried function that takes arrays for data
  - e.g: `juxt([Math.min, Math.max], [3, 4, 9, -3]) // => [-3, 9]`
  - Also moved it to be in the array category
- `ap` re written to be a proper S combinator function
  - e.g: `ap(x => y => x + y, z => z * 2, 2) // => 6`
- Removed `amend` function since it's really just a limited `Object.assign` no real use for it

### New

- `reduce` now supports iterable types like `Map` and `Set`
- Added `inc` Function which increases a number by 1
- Added `dec` Function which decreases a number by 1
- Added `isZero` Function which checks if the number passed in is equal to the number zero
- Added `size` Function which takes a map or set data type and returns its size
  - **Note**: It is currently categorized under `Function` which may change in the future as I add more Map|Set friendly functions
- Added `count` Function which takes any collection based data and counts the values within
- Added `reduced` Function which should be used with `reduce` or `reduceRight` as a short circuit for the function (see improved)
- `has` is now generic for `Array`, `String`, `Object`, `Map`, and `Set` data types
- Added `within` Function which acts like `between` but is exclusive of the numbers provided

### Improved

- `isEmpty` now supports `Maps` and `Sets`
- Slight increase in `partition` performance
- Slight increase in `omit` performance
- Added import example onto each function, so it's visible within the examples
- `factors` had some typos in its docs
- Cleaned up `always` documentation
- Cleaned up `identity` documentation examples
- Cleaned up `type` to be more lightweight
- Completely re wrote `reduce` and `reduceRight`
  - No breaking changes
  - Both functions now support `reduced` which will short circuit out of the iteration and return the value
  - This is a good strategy for performance boosts
- `reduce`, `reduceRight`, and `reduced` are all using the `@@transducer` protocol
- Moved `every`, `some`, `reject`, `filter`, and `find` to use this new flow giving them decent performance improvements
- Tweaked `height` function for a tiny performance boost

## v0.10.3

### Fixed

- Updated **Dev** Dependency `npm-run-all` to fix the critical security vulnerability
- Homepage url to point to https://kyanite.dusty.codes

## v0.10.2

### New

- Added [TypeScript](https://www.typescriptlang.org/) Declarations file to bring in typings for functions
- Added `pathOr` function which works like path but allows a value to be returned rather than just `undefined`
- Added `test` function which runs a regex test against a provided string
- Added `match` function which will match a string against some regex and build an array of matching strings

### Improved

- README organization to help alleviate confusion
- Documentation for `partition`, `max`, `min`, `maxBy`, and `minBy` to be a bit easier to understand

### Fixed

- `range` will no longer show up under the `Function` category
- Docs for `find` so that the return is accurate
- Docs for `omit` so that the description is accurate and makes sense, also made the param more verbose
- Docs for `path` to correct the description
- Docs for `or` to have the correct types associated with the values
- Docs for `concat` to correct it's signature
- `List` type docs to depict String & Array signatures or "List" signatures

## v0.10.1

### Fixed

- `omit` documentation to show correct input

### New

- Added `over` function which applies a function over a object value

## v0.10.0

### Breaking Changes

#### Compatibility
- **Dropped IE support**
- **Dropped modularity support please see issue [#61](https://github.com/dhershman1/kyanite/issues/61) for more info**
  - In short, with the recent rollup versions currying is better supported for tree shaking

#### Removed
- All deprecated functions
  - `is`, `compact`, `compress`, `empty`, `deepClone`, `contains`, `strip`, `clone`, `head`, `tail`, `pluck`, and `words`
- `assign`, `entries`, and `values` Since we dropped IE support you shouldn't need these functions
- `unzip` - Rare use case limited usability
- `defaults` - Rare use case, you can achieve similar with `Object.assign` and small tweaking

#### Rename
- `sub` to `subtract`
- `mul` to `multiply`
- `div` to `divide`
- `identical` to `eq`
- `isEqual` to `deepEq`

#### Other
- `reduce` now expects a flipped reducer function `(x, acc)` rather than `(acc, x)`
- `add` No longer does type coercion to the values passed in
- `find` and `findIndex` now use the built in higher order functions
- Moved `last` and `first` into the list type rather than array
- Flipped the way `subtract` does math instead of `subtract(2, 1) === 2 - 1` it will now be `subtract(1, 2) === 2 - 1`
- `mean` has gone back to returning `NaN` if given an empty array and will throw a `Ref Error` if given no params
- `range` will not return a type error if given a string
- Re wrote `isEqual` again, making it far more flexible again as well as far more performant
- `omit` now requires you to send an array of keys even if it's just one
- `difference` no longer cares about array order, and accepts an array of arrays
- `apply` now always requires an array for values

### Improved

- **Huge performance gains, added internal curry backend since functions rely on each other so much**
- Replaced `uglify-js` with `terser`
- Moved `mean` to Number type rather than Array type
- Also cleaned up `mean`
- Cleaned up and fixed the `mean` documentation
- Cleaned up `complement` and `reject` documentation
- Param rename in `pipe` to be more verbose/accurate
- Cleaned up `sortBy`
- Cleaned up `gcd`
- Cleaned up `factors`
- Moved `length` to list type
- `isEqual`'s documentation needed more examples
- `isEqual` is able to handle `Set` data types
- `isEmpty` uses `isNil` now instead of `!x`
- `isOdd` and `isEven` both cleaned up nicely
- Moved `range` to number type
- `height` improvements to use `.values` vs `.keys`

### New

- Added `flip` function which flips the params sent to a given function
- Added `eqBy` function which compares two values after applying a function to both
- Added `negate` function which adds a negative to a given number
- Added `composeP` function which works like `compose` but with Promises
- Added `pipeP` function which works like `pipe` but with Promises
- Added `replace` function which takes a string and replaces a value within it
- Added `countBy` function which takes an array and counts the values
- Added `amend` function which amends a new object into an old to update data
- Added `clamp` function which clamps a number between 2 others
- Added `defaultTo` function which returns a value unless it is `NaN`, `undefined`, or `null` then it returns a default
- Added `reduceRight` function which works like `reduce` but starts from the right of the array

## v0.9.2

### Deprecated

- `is` There isn't a solid enough use case for this aside from maybe a test suite, this is also pretty messy data wise
  - Try using `type` instead
- `identical` As it is going to become the `eq` function in v0.10.0
- `compact` use `filter` instead
- `compress` use `sift` instead
- `words` The use case is basically just using `split` anyway

### Fixed

- Incorrect documentation on `compose`
- Typo in `includes` documentation

## v0.9.1

### Deprecated

- `clone` : There is no real need for this since every function already shallow clones data, and a deep clone is shaky ground at best
- `head` : Bad use case, objects are in no particular order
- `tail` : Bad use case, objects are in no particular order

### Fixed

- Added description to `compose` function

### Improved

- The documentation for `any` and `whole` didn't make a lot of sense
- `round` description needed a slight tweak
- Made `add`, `div`, `mul`, and `sub` descriptions a bit more strict

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
