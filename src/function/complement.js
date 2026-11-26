import _curry2 from '../_internals/_curry2.js'
import not from './not.js'

/** @private @type {<T = any>(fn: (data: T) => boolean, a: T) => boolean} */
const complement = (fn, a) => not(fn(a))

/**
 * @name complement
 * @function
 * @since v0.1.0
 * @category Function
 * @description
 * Takes a function and returns the opposite boolean value of what the predicate returns
 * @param {Function} fn The function we want to apply the complement of
 * @param {Any} a The value our functionality is being ran against
 * @return {Function} Returns the opposite function back
 *
 * @example
 * import { complement } from 'kyanite'
 *
 * complement(x => x > 10, 11) // => false
 * complement(x => x < 10, 11) // => true
 *
 * // It's also curried
 *
 * const notGtTen = complement(x => x > 10)
 *
 * notGtTen(11) // => false
 * notGtTen(10) // => true
 */
export default /** @type {{
  <T = any>(fn: (data: T) => boolean): (a: T) => boolean
  <T = any>(fn: (data: T) => boolean, a: T): boolean
}} */ (_curry2(complement))
