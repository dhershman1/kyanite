import _curry2 from '../_internals/_curry2'

/**
 * @name test
 * @since v0.10.2
 * @function
 * @category String
 * @sig RegExp -> String -> Boolean
 * @description
 * Tests regexp against a string value returns true if matches were found, false if not
 * @param {RegExp} reg The regex to test the string against
 * @param {String} str The string to test
 * @return {Boolean} A boolean based on if the string passes the test or not
 * @example
 * import { test } from 'kyanite'
 *
 * test(/^a/, 'abc') // => true
 * test(/^b/, 'abc') // => false
 *
 * // It's also curried
 * const fn = test(/^a/)
 *
 * fn('abc') // => true
 * fn('bca') // => false
 */
const test = (reg, str) => reg.test(str)

export default _curry2(test)
