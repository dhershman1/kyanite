import _curry2 from '../_internals/_curry2'
import map from '../array/map'
import reduce from '../array/reduce'
import concat from '../list/concat'

/**
 * @name ap
 * @function
 * @since v0.4.0
 * @category Function
 * @sig Array (a -> b) -> Array a -> Array b
 * @description
 * Takes an array of functions to be applied to an array of data, concating the results together
 * also known as the S combinator
 * @param {Array} fns The list of functions to apply
 * @param {Array} list The array of data to run the functions on
 * @return {Array} A new array of data modified by the functions concated together
 * @example
 * ap([x => x + 1, x => x * 2], [1, 2, 3]) // => [2, 3, 4, 2, 4, 6]
 *
 * // It's also curried
 *
 * const a = ap([x => x + 1, x => x * 2])
 *
 * a([1, 2, 3]) // => [2, 3, 4, 2, 4, 6]
 * a([3, 4, 5]) // => [4, 5, 6, 6, 8, 10]
 */
const ap = (fns, list) =>
  reduce((f, acc) => concat(map(f, list), acc), [], fns)

export default _curry2(ap)
