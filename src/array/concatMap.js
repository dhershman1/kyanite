import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xconcatMap from '../_internals/_xconcatMap.js'
/** @import { Transformer } from '../_internals/_types.js' */

/** @private @type {<T, T1>(fn: (data: T) => T1 | ReadonlyArray<T1>, arr: ReadonlyArray<T>) => T1[]} */
const concatMap = (fn, arr) => {
  /** @type {any[]} */
  const result = []

  for (const v of arr) {
    const x = fn(v)

    // Arrays are joined in one level deep, like concat
    if (Array.isArray(x)) {
      for (const item of x) {
        result.push(item)
      }
    } else {
      result.push(x)
    }
  }

  return result
}

/**
 * @name concatMap
 * @since v0.1.0
 * @function
 * @category Array
 * @sig (* -> b) -> [a] -> [b]
 * @description Take an array and concats the values into a new array after applying the function
 * @param {Function} fn The function to be applied to each value
 * @param {Array} arr The array to concat together
 * @return {Array} A newly created array of the concated values
 *
 * When it's used with `transduce` or `into`, `concatMap(fn)` passes along each item of the array `fn` gives back, one at a time
 *
 * @example
 * import { concatMap, identity, into, take } from 'kyanite'
 *
 * concatMap(x => [x, x], [1, 2, 3]) // => [1, 1, 2, 2, 3, 3]
 * concatMap(identity, [[1, 2], [3, 4], [5, 6]]) // => [1, 2, 3, 4, 5, 6]
 *
 * // It's also curried
 *
 * const con = concatMap(x => [x, x])
 *
 * con([1, 2, 3]) // => [1, 1, 2, 2, 3, 3]
 *
 * // It also works as a transducer
 *
 * into([], [concatMap(x => [x, x]), take(3)], [1, 2, 3]) // => [1, 1, 2]
 */
export default /** @type {{
  <T, T1>(fn: (data: T) => T1 | ReadonlyArray<T1>): {
    (xf: Transformer): Transformer
    (arr: ReadonlyArray<T>): T1[]
  }
  <T, T1>(fn: (data: T) => T1 | ReadonlyArray<T1>, arr: ReadonlyArray<T>): T1[]
}} */ (_curry2(_dispatchable(_xconcatMap, concatMap)))
