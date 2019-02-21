import _curry2 from '../_internals/_curry2'

/**
 * @name gte
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> Boolean
 * @description Checks if a value is greater than or equal to the other
 * @param {Any} a Value to determine if it is greater than or equal to the other
 * @param {Any} b Value to compare to see if it is less than or equal to the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * import { gte } from 'kyanite'
 *
 * gte(1, 2) // => true
 * gte(1, 1) // => true
 * gte('a', 'b') // => true
 *
 * // It's also curried
 *
 * const fn = gte(2)
 *
 * fn(1) // => true
 * fn(2) // => true
 * fn(3) // => false
 */
const gte = (a, b) => b >= a

export default _curry2(gte)
