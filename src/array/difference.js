import concatMap from './concatMap.js'
import groupBy from './groupBy.js'
import identity from '../function/identity.js'
import uniq from './uniq.js'
import filter from './filter.js'

/**
 * @name difference
 * @since v0.1.0
 * @function
 * @category Array
 * @sig [*] -> [*] -> [*]
 * @description Returns a new array of values that are not contained within any of the arrays
 * @param {Array} arrs The array of arrays we want to get the difference of
 * @return {Array} An array of elements that are not present in all of the arrays
 *
 * @example
 * import { difference } from 'kyanite'
 *
 * difference([[1, 2, 3], [1]]) // => [2, 3]
 * difference([[1], [1, 2, 3]]) // => [2, 3]
 * difference([[1], [1, 2, 3], [2, 4]]) // => [3, 4]
 */
const difference = arrs => {
  const arr = concatMap(uniq, arrs)
  const grouped = groupBy(identity, arr)

  return filter(x => grouped[x].length === 1, arr)
}

export default difference
