import and from '../function/and'
import eq from '../function/eq'

/**
 * @name even
 * @function
 * @since v0.11.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is even or not
 * @param {Number} n The number to check if its even
 * @return {Boolean} Whether or not the provided number is even
 * @example
 * import { even } from 'kyanite'
 *
 * even(2) // => true
 * even(12) // => true
 * even('h') // => false
 * even(1) // => false
 * even(NaN) // => false
 */
const even = n => and(!eq(n, NaN), eq(n % 2, 0))

export default even
