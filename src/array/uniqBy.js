import _curry2 from '../_internals/_curry2.js'

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
 * @example
 * import { uniqBy } from 'kyanite'
 *
 * uniqBy(x => x > 2, [1, 2, 3, 4, 5]) // => [3, 4, 5]
 *
 * // It is also curried
 *
 * const uq = uniqBy(x => x > 2)
 *
 * uq([1, 2, 3, 4, 5]) // => [3, 4, 5]
 */
export default /** @type {{
  <T = any, U = any>(fn: (a: T) => U): (list: ReadonlyArray<T>) => T[]
  <T = any, U = any>(fn: (a: T) => U, list: ReadonlyArray<T>): T[]
}} */ (_curry2(uniqBy))
