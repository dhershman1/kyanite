/** @private @type {(a: string | ReadonlyArray<any>) => number} */
const length = a => a.length

/**
 * @name length
 * @function
 * @since v0.1.0
 * @category Array
 * @sig
 * Array -> Number
 * String -> Number
 * @description Obtains the length of the passed array
 * @param {Array} a The array to find the length of
 * @return {Number} The length of the array
 *
 * @example
 * import { length } from 'kyanite'
 *
 * length([1, 2, 3, 4]) // => 4
 * length([]) // => 0
 */
export default /** @type {{
  (a: string | ReadonlyArray<any>): number
}} */ (length)
