import _curry2 from '../_internals/_curry2.js'

/** @private @type {(a: number, b: number) => number} */
const multiply = (a, b) => a * b

/**
 * @name multiply
 * @function
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Multiplies the provided numbers
 * @param {Number} a The first factor to multiply with
 * @param {Number} b The second factor to multiply with
 * @return {Number} The product of the numbers
 *
 * @example
 * import { multiply } from 'kyanite'
 *
 * multiply(2, 1) // => 2
 *
 * // It's also curried
 *
 * const mul = multiply(5)
 *
 * mul(3) // => 15
 * mul(2) // => 10
 */
export default /** @type {{
  (a: number): (b: number) => number
  (a: number, b: number): number
}} */ (_curry2(multiply))
