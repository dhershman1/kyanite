import _curry2 from '../_internals/_curry2.js'

/** @private @type {<T = any>(i: number, list: ReadonlyArray<T> | string) => T[] | string} */
const take = (i, list) => list.slice(0, i)

/**
 * @name take
 * @function
 * @since v0.2.2
 * @category Array
 * @sig Number -> Array -> Array
 * @description Takes the values from an array up until the point specified, then brings those values back
 * @param {Number} i The index we want our take to start at
 * @param {Array} list The array we are taking from
 * @return {Array} A new array of the values taken
 *
 * @example
 * import { take } from 'kyanite'
 *
 * take(3, [1, 2, 3, 4, 5]) // => [1, 2, 3]
 *
 * // It's also curried
 *
 * const t = take(3)
 *
 * t([1, 2, 3, 4, 5]) // => [1, 2, 3]
 */
export default /** @type {{
  <T = any>(i: number): (list: ReadonlyArray<T> | string) => T[] | string
  <T = any>(i: number, list: ReadonlyArray<T> | string): T[] | string
}} */ (_curry2(take))
