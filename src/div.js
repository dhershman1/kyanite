import curry from './curry'

/**
 * @name div
 * @since v2.0.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Divides the provided items
 * @param {Number} a The dividend of the division problem
 * @param {Number} b The divisor which the dividend will be divided by
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
const div = (a, b) => a / b

export default curry(div)
