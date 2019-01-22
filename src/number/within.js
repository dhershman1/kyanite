import _curry3 from '../_internals/_curry3'

/**
 * @name within
 * @since v0.11.0
 * @function
 * @category Number
 * @sig Number -> Number -> Number -> Boolean
 * @description Checks to see if a number is between two other numbers (exclusive)
 * @param {Number} min The number our value should be greater than or equal too
 * @param {Number} max The number our value should be less than or equal too
 * @param {Number} n The value to compare with
 * @return {Boolean} Whether or not the provided number is between the other two numbers
 * @example
 * import { within } from 'kyanite'
 *
 * within(1, 3, 2) // => true
 * within(1, 10, 7) // => true
 * within(1, 10, 10) // => false
 *
 * const fn = within(1, 10)
 *
 * fn(4) // => true
 * fn(10) // => false
 * fn(1) // => false
 */
const within = (min, max, n) => min < n && max > n

export default _curry3(within)
