import curry from '../function/curry'

/**
 * @name drop
 * @since v0.2.2
 * @category Array
 * @sig Number -> Array -> Array
 * @description Starts at a at desired index and pulls the values from that point until the end
 * @param {Number} i The index we want the slice to start at
 * @param {Array} list The array we want to drop from
 * @return {Array} An array with the indicated values removed from the array
 *
 * @example
 * drop(3, [1, 2, 3, 4, 5]) // => [4, 5]
 *
 * // It's also curried
 *
 * const d = drop(3)
 *
 * d([1, 2, 3, 4, 5]) // => [4, 5]
 */
const drop = (i, list) => list.slice(i, Infinity)

export default curry(drop)
