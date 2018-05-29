import curry from './curry'

/**
 * @name concatMap
 * @since v3.0.0
 * @category Array
 * @sig Function -> Array -> Array
 * @description Take an array and concats the values into a new array after applying the function
 * @param {Function} fn The function to be applied to each value
 * @param {Array} arr The array to concat together
 * @return {Array} A newly created array of the concated values
 * @example
 * concatMap(x => [x, x], [1, 2, 3]) // => [1, 1, 2, 2, 3, 3]
 *
 * // It's also curried
 *
 * const con = concatMap(x => [x, x])
 *
 * con([1, 2, 3]) // => [1, 1, 2, 2, 3, 3]
 */
const concatMap = (fn, arr) =>
  arr.reduce((acc, v) => acc.concat(fn(v)), [])

export default curry(concatMap)
