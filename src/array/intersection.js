import _curry2 from '../_internals/_curry2'
import groupBy from './groupBy'
import has from '../object/has'
import identity from '../function/identity'
import uniq from './uniq'

/**
 * @name intersection
 * @function
 * @since v0.1.0
 * @category Array
 * @sig Array a -> Array a -> Array a
 * @description Returns an array containing elements present in both arrays
 * @param {Array} a Our first array value to compare with
 * @param {Array} b Our second array value to compare with
 * @return {Array} A new array containing values that both arrays had
 *
 * @example
 * import { intersection } from 'kyanite'
 *
 * intersection([1, 2, 3, 4], [3, 4, 5, 6]) // => [3, 4]
 *
 * // It's also curried
 *
 * const inter = intersection([1, 2, 3, 4])
 *
 * inter([3, 4, 5, 6]) // => [3, 4]
 */
const intersection = (a, b) => {
  const grouped = groupBy(identity, b)

  return uniq(a.filter(x => has(x, grouped)))
}

export default _curry2(intersection)
