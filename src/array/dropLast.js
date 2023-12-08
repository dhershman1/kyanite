import _curry2 from '../_internals/_curry2.js'
import take from './take.js'

/**
 * @name dropLast
 * @since v2.1.0
 * @function
 * @category Array
 * @sig Number -> Array -> Array
 * @description Returns a list containing all but the last n elements of the given list.
 * @param {Number} n The number of values we want to drop
 * @param {Array} list The array we want to drop from
 * @return {Array} An array with the indicated values removed from the array
 *
 * @example
 * import { dropLast } from 'kyanite'
 *
 * dropLast(3, [1, 2, 3, 4, 5]) // => [1, 2]
 *
 * // It's also curried
 *
 * const d = dropLast(3)
 *
 * d([1, 2, 3, 4, 5]) // => [1, 2]
 */
const dropLast = (n, list) => take(n < list.length ? list.length - n : 0, list)

export default _curry2(dropLast)
