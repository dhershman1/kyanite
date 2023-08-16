import _curry2 from '../_internals/_curry2.js'
import uniq from './uniq.js'

/**
 * @name union
 * @function
 * @since v0.1.0
 * @category Array
 * @sig Array a -> Array a -> Array a
 * @description Creates a union between two arrays, removing duplicates from each
 * @param {Array} a An array to put through combining
 * @param {Array} rest The rest of the arrays
 * @return {Array} A new array of unique values from each of the passed in arrays
 *
 * @example
 * import { union } from 'kyanite'
 *
 * union([1, 2, 3], [3, 4, 5]) // => [1, 2, 3, 4, 5]
 * union([1, 2, 3], [[3, 4, 5], [4, 5, 6]]) // => [1, 2, 3, 4, 5, 6]
 *
 * // It's also curried
 *
 * const un = union([1, 2, 3])
 *
 * un([3, 4, 5]) // => [1, 2, 3, 4, 5]
 * un([[3, 4, 5], [4, 5, 6]]) // => [1, 2, 3, 4, 5, 6]
 */
const union = (list, other) => uniq(list.concat(other))

export default _curry2(union)
