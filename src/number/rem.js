import _curry2 from '../_internals/_curry2.js'

/**
 * @name rem
 * @function
 * @since v0.7.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Takes two numbers and gets the remainder from the division
 * @param {Number} a The dividend of the division problem
 * @param {Number} b The divisor which the dividend will be divided by
 * @return {Number} The remainder of the two numbers
 * @example
 * import { rem } from 'kyanite'
 *
 * rem(5, 12) // => 2
 * rem(2, -1) // => -1
 * rem(2, NaN) // => NaN
 *
 * // It's also curried
 * const r = rem(5)
 *
 * r(12) // => 2
 *
 */
const rem = (a, b) => b % a

export default _curry2(rem)
