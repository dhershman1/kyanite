import curry from '../function/curry'

/**
 * @name div
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Divides the provided items
 * @param {Number} a The divisor which the dividend will be divided by
 * @param {Number} b The dividend of the division problem
 * @return {Number} The quotient of the two numbers
 *
 * @example
 * div(2, 1) // => 2
 *
 * // It's also curried
 *
 * const divide = div(15)
 *
 * divide(3) // => 5
 * divide(5) // => 3
 */
const div = (a, b) => b / a

export default curry(div)
