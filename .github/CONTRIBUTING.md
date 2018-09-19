# Contributing

I am open to, and grateful for, any contributions made to this project.

Please abide by the linter setup which uses [Standardjs](http://standardjs.com) rules

Please make sure all PRs are pointed at and processed through the main Development branch

## Commit Messages

Please write and use meaningful and helpful commit messages for your contributions and changes.

## Testing

All changes are expected to continue to pass the tests in place.

If you are adding new functionality to the library you are expected to also unit test and create appropriate testing for your additions

## Documentation

For any new functionality additions please follow the format of other functionality in the form of jsdocs. The expected formatting should be:

```
/**
 * @name function name
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

- Any functionality is expected to work with a single type
- All functionality should be pure functions
- Run unit tests with `npm test`
- All unit tests are built using ava with babel so standard js is okay to use
- Make sure the current babel setup is able to transpile your code for support of IE 10+
- Please don't include the seperatly built function files in your request the main `kyanite.min.js` is okay
- If you add new functionality make sure to run `node scripts/create-export.js` which generates a new `index.js` in src that `npm run build` will use to create a new `kyanite.min.js` file

## Releasing

Currently the CHANGELOG is updated manually before each release. You can document your changes here, or I will document them using your provided commit messages.

Releases follow standard [semantic versioning](https://semver.org/).

I will handle publishing to npm for now after your PR is merged in
