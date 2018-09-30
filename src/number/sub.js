import curry from '../function/curry'

/**
 * @name sub
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Subtracts the provided numbers
 * @param {Number} a The number to subtract with
 * @param {Number} b The number to subtract from
 * @return {Number} The difference of the numbers
 *
 * @example
 * sub(2, 1) // => 1
 *
 * // It's also curried
 *
 * const subtract = sub(5)
 *
 * subtract(3) // => 2
 * subtract(2) // => 3
 */
const sub = (a, b) => b - a

export default curry(sub)
