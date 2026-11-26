import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xtakeWhile from '../_internals/_xtakeWhile.js'
import findIndex from './findIndex.js'
/** @import { Transformer } from '../_internals/_types.js' */

/** @private @type {<T = any>(fn: (x: T) => boolean, list: ReadonlyArray<T> | string) => T[] | string} */
const takeWhile = (fn, arr) => {
  const i = findIndex(x => !fn(x), /** @type {ArrayLike<any>} */ (arr))

  return /** @type {any} */ (i < 0 ? arr.slice() : arr.slice(0, i))
}

/**
 * @name takeWhile
 * @function
 * @since v0.9.0
 * @category Array
 * @sig (a -> Boolean) -> Array [a] -> Array [a]
 * @description Takes values from an array and puts them into a new array while the function parameter returns true
 * @param {Function} fn The function ran against each value within the array should return a boolean
 * @param {Array} arr The array to take from
 * @return {Array} A new array of data that passed the param function
 *
 * When it's used with `transduce` or `into`, `takeWhile(fn)` passes values along until one fails, then stops, nothing after it is looked at
 *
 * @example
 * import { into, map, takeWhile } from 'kyanite'
 *
 * takeWhile(x => x < 4, [1, 2, 3, 4, 5, 6]) // => [1, 2, 3]
 *
 * // It's also curried
 * const fn = takeWhile(x => x < 4)
 *
 * fn([1, 2, 3, 4, 5]) // => [1, 2, 3]
 * fn([3, 4, 5]) // => [3]
 *
 * // It also works as a transducer
 *
 * into([], [takeWhile(x => x < 3), map(x => x * 10)], [1, 2, 3, 4, 1]) // => [10, 20]
 */
export default /** @type {{
  <T = any>(fn: (x: T) => boolean): {
    (xf: Transformer): Transformer
    (list: ReadonlyArray<T> | string): T[] | string
  }
  <T = any>(fn: (x: T) => boolean, list: ReadonlyArray<T> | string): T[] | string
}} */ (_curry2(_dispatchable(_xtakeWhile, takeWhile)))
