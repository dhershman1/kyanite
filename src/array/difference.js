import concatMap from './concatMap'
import groupBy from './groupBy'
import identity from '../function/identity'
import uniq from './uniq'

/**
 * @name difference
 * @since v0.1.0
 * @function
 * @category Array
 * @sig Array [a] -> Array -> [b]
 * @description Returns a new array of values that are not contained within both arrays
 * @param {Array} arrs The array of arrays we want to get the difference of
 * @return {Array} An array of elements that are not present in both arrays
 *
 * @example
 *
 * difference([[1, 2, 3], [1]]) // => [2, 3]
 * difference([[1], [1, 2, 3]]) // => [2, 3]
 */
const difference = arrs => {
  const arr = concatMap(uniq, arrs)
  const grouped = groupBy(identity, arr)

  return arr.filter(x => grouped[x].length === 1)
}

export default difference
