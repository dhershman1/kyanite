import _curry2 from '../_internals/_curry2'
import concatMap from './concatMap'
import uniqBy from './uniqBy'
import groupBy from './groupBy'

/**
 * @name differenceBy
 * @since v0.10.0
 * @category Array
 * @sig (a -> Boolean) -> [[a]] -> [a]
 * @param {Function} fn The function to apply to values within each array
 * @param {Array} arrs An array of arrays to get the difference of
 * @return {Array} A new array of different values between the arrays
 * @example
 * const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }]
 * const l2 = [{ a: 3 }, { a: 4 }]
 *
 * differenceBy(x => x.a, [l1, l2]) // => [{ a: 1 }, { a: 2 }, { a: 4 }]
 *
 * // It's also curried
 * const fn = differenceBy(x => x.a)
 *
 * fn([l1, l2]) // => [{ a: 1 }, { a: 2 }, { a: 4 }]
 */
const differenceBy = (fn, arrs) => {
  const list = concatMap(uniqBy(fn), arrs)
  const grouped = groupBy(fn, list)

  return list.filter(x =>
    grouped[fn(x)].length === 1)
}

export default _curry2(differenceBy)
