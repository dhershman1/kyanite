import _curry2 from '../_internals/_curry2.js'

/** @private @type {(a: number, b: number) => number} */
const divide = (a, b) => b / a

/**
 * @name divide
 * @function
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Divides the provided numbers
 * @param {Number} a The divisor which the dividend will be divided by
 * @param {Number} b The dividend of the division problem
 * @return {Number} The quotient of the two numbers
 *
 * @example
 * import { divide } from 'kyanite'
 *
 * divide(2, 1) // => 2
 *
 * // It's also curried
 *
 * const div = divide(15)
 *
 * div(3) // => 5
 * div(5) // => 3
 */
export default /** @type {{
  (a: number): (b: number) => number
  (a: number, b: number): number
}} */ (_curry2(divide))
