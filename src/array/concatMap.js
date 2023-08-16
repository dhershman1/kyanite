import _curry2 from '../_internals/_curry2.js'
import concat from '../list/concat.js'
import _reduce from '../_internals/_reduce.js'

/**
 * @name concatMap
 * @since v0.1.0
 * @function
 * @category Array
 * @sig (* -> b) -> [a] -> [b]
 * @description Take an array and concats the values into a new array after applying the function
 * @param {Function} fn The function to be applied to each value
 * @param {Array} arr The array to concat together
 * @return {Array} A newly created array of the concated values
 * @example
 * import { concatMap, identity } from 'kyanite'
 *
 * concatMap(x => [x, x], [1, 2, 3]) // => [1, 1, 2, 2, 3, 3]
 * concatMap(identity, [[1, 2], [3, 4], [5, 6]]) // => [1, 2, 3, 4, 5, 6]
 *
 * // It's also curried
 *
 * const con = concatMap(x => [x, x])
 *
 * con([1, 2, 3]) // => [1, 1, 2, 2, 3, 3]
 */
const concatMap = (fn, arr) =>
  _reduce((v, acc) => concat(fn(v), acc), [], arr)

export default _curry2(concatMap)
