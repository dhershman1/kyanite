/**
 * @name tail
 * @since v1.2.0
 * @function
 * @category List
 * @sig List -> Array
 * @description Drops the first value of an array and returns the rest as a tail array
 * @param {String|Array} list The array we want to get the tail of
 * @return {Array} A new array of arrays containing the tail end values
 * @example
 * import { tail } from 'kyanite'
 *
 * tail([1, 2, 3, 4, 5]) // => [2, 3, 4, 5]
 */
const tail = ([, ...rest]) => rest

export default tail
