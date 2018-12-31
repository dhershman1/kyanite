
/**
 * @name size
 * @function
 * @since v0.11.0
 * @category Function
 * @sig Map|Set -> Number
 * @description Gets the size of a given map or set data type
 * @param {Map|Set} x The map or set data type to grab the value of
 * @return {Number} The size of the provided map or set
 * @example
 * import { size } from 'kyanite'
 *
 * size(new Map([['a', 1]])) // => 1
 * size(new Map()) // => 0
 * size(new Set([1, 2, 3])) // => 3
 * size(new Set()) // => 0
 */
const size = x => x.size

export default size
