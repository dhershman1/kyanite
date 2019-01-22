import _curry3 from '../_internals/_curry3'

/**
 * @name between
 * @since v0.7.0
 * @function
 * @category Number
 * @sig Number -> Number -> Number -> Boolean
 * @description Checks to see if a number is between two other provided numbers (inclusive)
 * @param {Number} min The number our value should be greater than or equal too
 * @param {Number} max The number our value should be less than or equal too
 * @param {Number} n The value to compare with
 * @return {Boolean} Whether or not the provided number is between the other two numbers
 * @example
 * import { between } from 'kyanite'
 *
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
const between = (min, max, n) => min <= n && max >= n

export default _curry3(between)
