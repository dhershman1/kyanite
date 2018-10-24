import _curry2 from '../_internals/_curry2'
import concatMap from './concatMap'
import groupBy from './groupBy'
import identity from '../function/identity'
import uniq from './uniq'

/**
 * @name difference
 * @since v0.1.0
 * @category Array
 * @sig Array a -> Array a -> Array a
 * @description Returns a new array of values that are not contained within both arrays
 * @param {Array} first The first array to compare
 * @param {Array} second The second array to compare
 * @return {Array} An array of elements that are not present in both arrays
 *
 * @example
 *
 * difference([1, 2, 3], [1]) // => [2, 3]
 * difference([1], [1, 2, 3]) // => [2, 3]
 *
 * // It's also curried
 * const diff = difference([1, 2, 3])
 *
 * diff([1]) // => [2, 3]
 * diff([2, 3, 4]) // => [1, 4]
 */
const difference = (first, second) => {
  const arr = concatMap(uniq, [first, second])
  const grouped = groupBy(identity, arr)

  return arr.filter(x => grouped[x].length === 1)
}

export default _curry2(difference)
