import and from '../function/and'
import eq from '../function/eq'

/**
 * @name isEven
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is even or not
 * @param {Number} n The number to check if its even
 * @return {Boolean} Whether or not the provided number is even
 * @example
 *
 * isEven(2) // => true
 * isEven(12) // => true
 * isEvent('h') // => false
 * isEven(1) // => false
 * isEven(NaN) // => false
 */
const isEven = n => and(!eq(n, NaN), eq(n % 2, 0))

export default isEven
