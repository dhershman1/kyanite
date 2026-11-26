import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xmap from '../_internals/_xmap.js'
/** @import { Transformer } from '../_internals/_types.js' */

/** @private @type {<T = any, U = any>(fn: (x: T) => U, list: ReadonlyArray<T>) => U[]} */
const map = (fn, list) => {
  let idx = 0
  const len = list.length
  const result = Array(len)

  while (idx < len) {
    result[idx] = fn(list[idx])
    idx += 1
  }

  return result
}

/**
 * @name map
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> b) -> [a] -> [b]
 * @description
 * Takes a function and applies it to all of the values within the provided list,
 * and brings back a new list of the same type.
 * @param {Function} fn The function to run against the values in our functor
 * @param {Array} list The list to iterate through
 * @return {Array} The new Array or Object that was created
 *
 * When it's used with `transduce` or `into`, `map(fn)` changes each value as it passes through instead of building a new list
 *
 * @example
 * import { into, map, take } from 'kyanite'
 *
 * const dbl = n => n * 2
 *
 * map(dbl, [1, 2, 3]) // => [2, 4, 6]
 *
 * // It's also curried
 *
 * const dbler = map(dbl)
 *
 * dbler([1, 2, 3]) // => [2, 4, 6]
 *
 * // It also works as a transducer
 *
 * into([], [map(dbl), take(2)], [1, 2, 3]) // => [2, 4]
 */
export default /** @type {{
  <T = any, U = any>(fn: (x: T) => U): {
    (xf: Transformer): Transformer
    (list: ReadonlyArray<T>): U[]
  }
  <T = any, U = any>(fn: (x: T) => U, list: ReadonlyArray<T>): U[]
}} */ (_curry2(_dispatchable(_xmap, map)))
