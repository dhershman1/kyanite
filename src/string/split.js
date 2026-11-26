import _curry2 from '../_internals/_curry2.js'

/** @private @type {(char: string | RegExp, str: string) => string[]} */
const split = (char, str) => str.split(char)

/**
 * @name split
 * @function
 * @since v0.9.0
 * @category String
 * @sig String -> String -> Array
 * @description Takes a string and splits it into an array based on the character passed in
 * @param {String} char The character to split the string by
 * @param {String} str The string we want to split
 * @return {Array} A new array of characters from the string
 * @example
 * import { split } from 'kyanite'
 *
 * split('', 'abc') // => ['a', 'b', 'c']
 * split(':', '123:334') // => ['123', '334']
 *
 * const sp = split('')
 *
 * sp('abc') // => ['a', 'b', 'c']
 */
export default /** @type {{
  (char: string | RegExp): (str: string) => string[]
  (char: string | RegExp, str: string): string[]
}} */ (_curry2(split))
