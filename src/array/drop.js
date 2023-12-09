import _curry2 from '../_internals/_curry2.js'

/**
 * @name drop
 * @since v0.2.2
 * @function
 * @category Array
 * @sig Number -> [a] -> [a]
 * @description Starts at a at desired index and pulls the values from that point until the end
 * @param {Number} i The index we want the slice to start at
 * @param {Array} list The array we want to drop from
 * @return {Array} An array with the indicated values removed from the array
 *
 * @example
 * import { drop } from 'kyanite'
 *
 * drop(3, [1, 2, 3, 4, 5]) // => [4, 5]
 * drop(6, [1, 2, 3, 4, 5]) // => []
 *
 * // It's also curried
 *
 * const d = drop(3)
 *
 * d([1, 2, 3, 4, 5]) // => [4, 5]
 */
const drop = (i, list) => list.slice(Math.max(0, i), Infinity)

export default _curry2(drop)
