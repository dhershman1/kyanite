import _curry2 from '../_internals/_curry2'

/**
 * @name match
 * @since v0.10.2
 * @function
 * @category String
 * @sig RegExp -> String -> Array
 * @description
 * Matches a string against some regexp to build an array of matching strings
 * @param {RegExp} reg The regex to match the string against
 * @param {String} str The string to match
 * @return {Array} An array of matched strings
 * @example
 * import { match } from 'kyanite'
 *
 * match(/([a-z]a)/g, 'bananas') //=> ['ba', 'na', 'na']
 * match(/a/, 'b') // => null
 *
 * // It's also curried
 * const fn = match(/([a-z]a)/g)
 *
 * fn('bananas') // => ['ba', 'na', 'na']
 * fn('why') // => null
 */
const match = (reg, str) => str.match(reg)

export default _curry2(match)
