# Contributing

I am open to, and grateful for, any contributions made to this project.

Please abide by the linter setup which uses [Standardjs](http://standardjs.com) rules

Please make sure all PRs are pointed at and processed through the main Development branch

## Commit Messages

I'd love it if your commit messages were in the format of `Type: summary` for example: `Updated: Changed var names to make more sense`

The types I'd like to stick to are:

- `Chore` -- A chore task like documentation/readme tweaks/dependency updates/etc
- `Updated` -- Updating something minor
- `Fixed` -- Fixing bugs/typos etc
- `Added` -- For changes that are adding new features/functionality/etc
- `Breaking` -- For changes that might be a breaking change

I know this format looks similar to something like [commitizen](https://www.npmjs.com/package/commitizen) but that changelog is too far gone to fully commit to it

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
