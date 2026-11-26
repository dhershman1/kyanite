import _reduce from '../_internals/_reduce.js'
/** @import { Ord } from '../_internals/_types.js' */

/** @private @type {<T extends Ord>(list: ReadonlyArray<T>) => T | undefined} */
const max = list => list.length ? _reduce((a, b) => a >= b ? a : b, list[0], list) : undefined

/**
 * @name max
 * @function
 * @since v0.1.0
 * @category Array
 * @sig [Number|String] -> Number|String
 * @description
 * Iterates through an array to find the max value
 * @param {Array} list The Array to iterate through
 * @return {Any} The found or "deemed" maximum value of the array, or undefined for an empty array
 *
 * @example
 * import { max } from 'kyanite'
 *
 * max([1, 3, 2, 5, 4]) // => 5
 * max(['c', 'a', 'b', 'f']) // => 'f'
 * max([]) // => undefined
 */
export default /** @type {{
  <T extends Ord>(list: ReadonlyArray<T>): T | undefined
}} */ (max)
