import curry from '../function/curry'

/**
 * @name between
 * @since v0.7.0
 * @category Number
 * @sig Number -> Number -> Number -> Boolean
 * @description Checks to see if a number is between two other provided numbers
 * @param {Number} a The number our value should be greater than or equal too
 * @param {Number} b The number our value should be less than or equal too
 * @param {Number} n The value to compare with
 * @return {Boolean} Whether or not the provided number is between the other two numbers
 * @example
 * between(1, 3, 2) // => true
 * between(1, 10, 7) // => true
 * between(1, 10, 11) // => false
 *
 * // It's also curried
 * const b = between(1)
 *
 * b(10, 9) // => true
 *
 * // A step further
 * const c = b(10)
 * // OR
 * // const c = between(1, 10)
 *
 * c(9) // => true
 * c(11) // => false
 */
const between = (a, b, n) => a <= n && b >= n

export default curry(between)
