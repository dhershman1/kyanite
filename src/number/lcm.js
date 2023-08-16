import _curry2 from '../_internals/_curry2.js'
import gcd from './gcd.js'

/**
 * @name lcm
 * @function
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Finds the least common multiple of the provided numbers
 * @param {Number} a The first number to use
 * @param {Number} b The second number to use
 * @return {Number} The least common multiple of the two numbers
 *
 * @example
 * import { lcm } from 'kyanite'
 *
 * lcm(90, 70) // => 630
 * lcm(91, 4) // => 364
 *
 * // It's also curried
 *
 * const a = lcm(90)
 *
 * a(70) // => 630
 * a(4) // => 180
 */
const lcm = (a, b) =>
  Math.abs(Math.floor(a / gcd(a, b) * b))

export default _curry2(lcm)
