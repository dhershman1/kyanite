import _curry2 from '../_internals/_curry2'

/**
 * @name lt
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> Boolean
 * @description Checks if a value is less than the other
 * @param {Any} a Value to determine if it is greater than the other
 * @param {Any} b Value to compare to see if it is less than the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * import { lt } from 'kyanite'
 *
 * lt(2, 1) // => true
 * lt('b', 'a') // => true
 *
 * // It's also curried
 *
 * const fn = lt(2)
 *
 * fn(1) // => false
 * fn(2) // => false
 * fn(3) // => true
 */
const lt = (a, b) => b < a

export default _curry2(lt)
