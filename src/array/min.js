import _reduce from '../_internals/_reduce.js'
/** @import { Ord } from '../_internals/_types.js' */

/** @private @type {<T extends Ord>(list: ReadonlyArray<T>) => T | undefined} */
const min = list => list.length ? _reduce((a, b) => a <= b ? a : b, list[0], list) : undefined

/**
 * @name min
 * @function
 * @since v0.1.0
 * @category Array
 * @description
 * Iterates through an array to find the min value
 * @param {Array} list The Array to iterate through
 * @return {Any} The found or "deemed" minimum value of the array, or undefined for an empty array
 *
 * @example
 * import { min } from 'kyanite'
 *
 * min([1, 3, 2, 5, 4]) // => 1
 * min(['c', 'a', 'b', 'f']) // => 'a'
 * min([]) // => undefined
 */
export default /** @type {{
  <T extends Ord>(list: ReadonlyArray<T>): T | undefined
}} */ (min)
