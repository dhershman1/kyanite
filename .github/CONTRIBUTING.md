# Contributing

I am open to, and grateful for, any contributions made to this project.

Please abide by the linter setup which uses [Standardjs](http://standardjs.com) rules

Please make sure all PRs are pointed at and processed through the main Development branch

## Commit Messages

Kyanite is now following the [commitizen](https://www.npmjs.com/package/commitizen) setup but don't worry, I wrote some scripts that you can use that take advantage of `npx` for this process!

- `npm run ac`: This command will run a `git add .` and then npx commitizen, use this if you want all unstagged changes added to a commit
- `npm run commit`: This runs a npx commit only, so you can cherry pick and break up your commits if you forget to do so and want to

## Testing

All changes are expected to continue to pass the tests in place.

If you are adding new functionality to the library you are expected to also unit test and create appropriate testing for your additions

To run all tests use `npm t`

If you want to test only your functionality feel free to change the test script to your `.js` file but **please** remember to change it back to `*.js` and re run `npm t` afterwards!

## Documentation

For any new functionality additions please follow the format of other functionality in the form of jsdocs. The expected formatting should be:

```js
/**
 * @name function name
 * @function
 * @since version it was created in
 * @category what the function applies to
 * @sig the signature type of the function
 * @description A description of the function
 * @param {Param Type} paramName Param Description for each parameter
 * @return {Type} What is the function returning
 *
 * @example
 * A use case example of the functionality
 */
```

If you are editing functionality and it requires api changes please be sure to change the jsdocs accordingly for that function.

## Developing

- The library is Functional so all new functions should follow this pattern
- Run unit tests with `npm test`
- Before opening a PR make sure you do `npm run scripts` to generate new documentation & build files

## Releasing

Currently the CHANGELOG is updated manually before each release. You can document your changes here, or I will document them using your provided commit messages.

Releases follow standard [semantic versioning](https://semver.org/).

I will handle publishing to npm for now after your PR is merged in
