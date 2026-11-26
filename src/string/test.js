import _curry2 from '../_internals/_curry2.js'

/** @private @type {(reg: RegExp, str: string) => boolean} */
// search ignores the g and y flags and leaves lastIndex alone, so the same regex
// gives the same answer every time (reg.test would continue from the last match)
const test = (reg, str) => str.search(reg) !== -1

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
export default /** @type {{
  (reg: RegExp): (str: string) => boolean
  (reg: RegExp, str: string): boolean
}} */ (_curry2(test))
