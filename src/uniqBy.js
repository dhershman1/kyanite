import curry from './curry'

/**
 * @name uniqBy
 * @since v3.0.0
 * @category Array
 * @sig (a -> b) -> Array a -> Array a
 * @description Returns an array of unique values from the applied function
 * @param {Function} fn The function to apply
 * @param {Array} list The list to sift through
 * @return {Array} An array of unique values from the provided function
 *
 * @example
 *
 * uniqBy(x => x > 2, [1, 2, 3, 4, 5]); // => [3, 4, 5]
 *
 * // It is also curried
 *
 * const uq = uniqBy(x => x > 2);
 *
 * uq([1, 2, 3, 4, 5]); // => [3, 4, 5]
 */
const uniqBy = (fn, list) =>
  list.reduce((acc, a) => {
    if (acc.map(fn).indexOf(fn(a)) === -1) {
      acc.push(a)
    }

    return acc
  }, [])

export default curry(uniqBy)
