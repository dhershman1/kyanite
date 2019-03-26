import _curry2 from '../_internals/_curry2'

/**
 * @name lte
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> Boolean
 * @description Checks if a value is less than or equal to the other
 * @param {Any} a Value to determine if it is greater than or equal to the other
 * @param {Any} b Value to compare to see if it is less than or equal to the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * import { lte } from 'kyanite'
 *
 * lte(2, 1) // => true
 * lte(1, 1) // => true
 * lte('b', 'a') // => true
 *
 * // It's also curried
 *
 * const fn = lte(2)
 *
 * fn(1) // => false
 * fn(2) // => true
 * fn(3) // => true
 */
const lte = (a, b) => b <= a

export default _curry2(lte)
