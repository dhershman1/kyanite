import _curry2 from '../_internals/_curry2.js'
import drop from './drop.js'

/**
 * @name takeLast
 * @function
 * @since v2.1.0
 * @category Array
 * @sig Number -> Array -> Array
 * @sig Number -> String -> String
 * @description Takes the values from an array up until the point specified, then brings those values back
 * @param {Number} i The index we want our take to start at
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
const takeLast = (i, list) => drop(i >= 0 ? list.length - i : 0, list)

export default _curry2(takeLast)
