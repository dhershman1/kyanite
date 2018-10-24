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
 * @description Returns an array with the elements present in the first that are not in the second
 * @param {Array} first The list to search through
 * @param {Array} second The second list to compare against
 * @return {Array} An array of elements present in the first that are not in the second
 *
 * @example
 *
 * difference([1, 2, 3], [1]) // => [2, 3]
 *
 * // It's also curried
 * const diff = difference([1, 2, 3])
 *
 * diff([1]) // => [2, 3]
 */
const difference = (first, second) => {
  const arr = concatMap(uniq, [first, second])
  const grouped = groupBy(identity, arr)

  return arr.filter(x => grouped[x].length === 1)
}

export default _curry2(difference)
