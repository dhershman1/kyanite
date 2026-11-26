import _curry2 from '../_internals/_curry2.js'

/** @private @type {(a: number, b: number) => boolean} */
const lt = (a, b) => b < a

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
export default /** @type {{
  (a: number): (b: number) => boolean
  (a: number, b: number): boolean
}} */ (_curry2(lt))
