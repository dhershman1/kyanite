import _curry2 from '../_internals/_curry2'

/**
 * @name sort
 * @function
 * @since v0.1.0
 * @category Array
 * @sig ((a, a) -> Number) -> Array a -> Array a
 * @description Uses a comparison function to sort an array
 * @param {Function} fn The function used to sort the array
 * @param {Array} a The array to be sorted
 * @return {Array} A new sorted array
 *
 * @example
 * import { sort } from 'kyanite'
 *
 * sort((a, b) => a - b, [99, 23, 10, 53, 1]) // => [1, 10, 23, 53, 99]
 *
 * // It's also curried
 *
 * const sorter = sort((a, b) => a - b)
 *
 * sorter([99, 23, 10, 53, 1]) // => [1, 10, 23, 53, 99]
 * sorter([5, 3, 4, 6, 2, 1]) // => [1, 2, 3, 4, 5, 6]
 */
const sort = (fn, a) => a.slice().sort(fn)

export default _curry2(sort)
