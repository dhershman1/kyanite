import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'

/**
 * @name uniqBy
 * @since v0.1.0
 * @category Array
 * @sig (a -> b) -> Array a -> Array a
 * @description Returns an array of unique values from the applied function
 * @param {Function} fn The function to apply
 * @param {Array} list The list to sift through
 * @return {Array} An array of unique values from the provided function
 *
 * @example
 *
 * uniqBy(x => x > 2, [1, 2, 3, 4, 5]) // => [3, 4, 5]
 *
 * // It is also curried
 *
 * const uq = uniqBy(x => x > 2)
 *
 * uq([1, 2, 3, 4, 5]) // => [3, 4, 5]
 */
const uniqBy = (fn, list) =>
  Object.values(list.reduce((acc, a) => {
    const k = fn(a)

    return !acc.hasOwnProperty(k) ? _assocǃ(acc, k, a) : acc
  }, {}))

export default _curry2(uniqBy)
