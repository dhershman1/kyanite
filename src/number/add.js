import _curry2 from '../_internals/_curry2.js'

/** @private @type {(a: number, b: number) => number} */
const add = (a, b) => a + b

/**
 * @name add
 * @since v0.1.0
 * @function
 * @category Number
 * @sig Number -> Number -> Number
 * @description Adds the provided numbers together
 * @param {Number} a The first number to add
 * @param {Number} b The second number to add
 * @return {Number} The sum of the numbers
 *
 * @example
 * import { add } from 'kyanite'
 *
 * add(1, 2) // => 3
 *
 * // It's also curried
 *
 * const adder = add(2)
 *
 * adder(3) // => 5
 * adder(2) // => 4
 */
export default /** @type {{
  (a: number): (b: number) => number
  (a: number, b: number): number
}} */ (_curry2(add))
