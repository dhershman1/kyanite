import _curry2 from '../_internals/_curry2.js'

/** @private @type {(a: number, b: number) => number} */
const subtract = (a, b) => b - a

/**
 * @name subtract
 * @function
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Subtracts the provided numbers
 * @param {Number} a The subtrahend number to subtract with
 * @param {Number} b The minuend number to subtract from
 * @return {Number} The difference of the numbers
 *
 * @example
 * import { subtract } from 'kyanite'
 *
 * subtract(2, 1) // => 1
 *
 * // It's also curried
 *
 * const sub = subtract(5)
 *
 * sub(3) // => 2
 * sub(2) // => 3
 */
export default /** @type {{
  (a: number): (b: number) => number
  (a: number, b: number): number
}} */ (_curry2(subtract))
