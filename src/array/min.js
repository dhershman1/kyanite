import fold from './fold.js'
/** @import { Ord } from '../_internals/_types.js' */

// const min = list => list.reduce((a, b) => a <= b ? a : b)
const min = fold((a, b) => a <= b ? a : b)

/**
 * @name min
 * @function
 * @since v0.1.0
 * @category Array
 * @description
 * Iterates through an array to find the min value
 * @param {Array} list The Array to iterate through
 * @return {Any} The found or "deemed" minimum value of the array
 *
 * @example
 * import { min } from 'kyanite'
 *
 * min([1, 3, 2, 5, 4]) // => 1
 * min(['c', 'a', 'b', 'f']) // => 'a'
 */
export default /** @type {{
  <T extends Ord>(list: ReadonlyArray<T>): T
}} */ (min)
