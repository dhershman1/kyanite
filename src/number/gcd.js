import _curry2 from '../_internals/_curry2'

/**
 * @name gcd
 * @function
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description
 * Determines the greatest common denominator of the numbers passed in
 * @param {Number} a The First number to use
 * @param {Number} b The Second number to use
 * @return {Number} The Greatest Common Denominator
 *
 * @example
 * import { gcd } from 'kyanite'
 *
 * gcd(80, 90) // => 10
 * gcd(20, 600) // => 20
 *
 * // It's also curried
 *
 * const a = gcd(80)
 *
 * a(90) // => 10
 * a(93) // => 1
*/
const gcd = (a, b) => b ? gcd(b, a % b) : a

export default _curry2(gcd)
