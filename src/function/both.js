import _curry3 from '../_internals/_curry3.js'
/** @import { Pred } from '../_internals/_types.js' */

/** @private @type {<T = any>(pred1: Pred, pred2: Pred, data: T) => boolean} */
const both = (f, g, a) => f(a) && g(a)

/**
 * @name both
 * @function
 * @since v0.2.0
 * @category Function
 * @sig Function -> Function -> Any -> Boolean
 * @description Validates that the same value passed into two different functions returns truthy for both
 * @param {Function} f The first function to test the value in
 * @param {Function} g The second function to test the value in
 * @param {Any} a The value to run in the previous two functions
 * @return {Boolean} Based on if both functions return a truthy value when ran
 *
 * @example
 * import { both } from 'kyanite'
 *
 * both(x => x > 10, x => x < 20, 15) // => true
 *
 * // It's also curried
 *
 * const b = both(x => x > 10, x => x < 20)
 *
 * b(15) // => true
 * b(9) // => false
 */
export default /** @type {{
  (pred1: Pred): {
    (pred2: Pred): <T = any>(data: T) => boolean
    <T = any>(pred2: Pred, data: T): boolean
  }
  (pred1: Pred, pred2: Pred): <T = any>(data: T) => boolean
  <T = any>(pred1: Pred, pred2: Pred, data: T): boolean
}} */ (_curry3(both))
