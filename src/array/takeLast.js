import _curry2 from '../_internals/_curry2.js'
import drop from './drop.js'

/**
 * @name takeLast
 * @function
 * @since v3.0.0
 * @category Array
 * @sig Number -> Array -> Array
 * @description Returns a new list containing the last n elements of the given list. If n > list.length, returns a list of list.length elements.
 * @param {Number} n The index we want our take to start at
 * @param {Array|String} list The array we are taking from
 * @return {Array|String} A new array of the values taken
 *
 * @example
 * import { takeLast } from 'kyanite'
 *
 * takeLast(3, [1, 2, 3, 4, 5]) // => [3, 4, 5]
 *
 * // It's also curried
 *
 * const t = takeLast(3)
 *
 * t([1, 2, 3, 4, 5]) // => [3, 4, 5]
 */
const takeLast = (n, list) => drop(n >= 0 ? list.length - n : 0, list)

export default _curry2(takeLast)
