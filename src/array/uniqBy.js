import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xuniqBy from '../_internals/_xuniqBy.js'
/** @import { Transformer } from '../_internals/_types.js' */

/** @private @type {<T = any, U = any>(fn: (a: T) => U, list: ReadonlyArray<T>) => T[]} */
const uniqBy = (fn, list) => {
  const seen = new Set()

  return list.filter(a => {
    const k = fn(a)

    if (seen.has(k)) {
      return false
    }

    seen.add(k)

    return true
  })
}

/**
 * @name uniqBy
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> b) -> Array a -> Array a
 * @description Returns an array of unique values from the applied function
 * @param {Function} fn The function to apply
 * @param {Array} list The list to sift through
 * @return {Array} An array of unique values from the provided function
 *
 * When it's used with `transduce` or `into`, `uniqBy(fn)` only passes along the first value for each result of `fn`
 *
 * @example
 * import { into, take, uniqBy } from 'kyanite'
 *
 * uniqBy(x => x > 2, [1, 2, 3, 4, 5]) // => [1, 3]
 *
 * // It is also curried
 *
 * const uq = uniqBy(x => x > 2)
 *
 * uq([1, 2, 3, 4, 5]) // => [1, 3]
 *
 * // It also works as a transducer
 *
 * into([], [uniqBy(x => x.length), take(2)], ['and', 'here', 'are', 'some', 'words']) // => ['and', 'here']
 */
export default /** @type {{
  <T = any, U = any>(fn: (a: T) => U): {
    (xf: Transformer): Transformer
    (list: ReadonlyArray<T>): T[]
  }
  <T = any, U = any>(fn: (a: T) => U, list: ReadonlyArray<T>): T[]
}} */ (_curry2(_dispatchable(_xuniqBy, uniqBy)))
