import curry from './curry'

/**
 * @name ap
 * @since v0.4.0
 * @category Function
 * @sig Array (a -> b) -> Array a -> Array b
 * @description
 * Takes an array of functions to be applied to an array of data, concating the results together
 * @param {Array} fns The list of functions to apply
 * @param {Array} list The array of data to run the functions on
 * @return {Array} A new array of data modified by the functions concated together
 * @example
 * ap([x => x + 1, x => x * 2], [1, 2, 3]) // => [2, 3, 4, 2, 4, 6]
 *
 * // It's also curried
 *
 * const a = ap([x => x + 1, x => x * 2])
 *
 * a([1, 2, 3]) // => [2, 3, 4, 2, 4, 6]
 * a([3, 4, 5]) // => [4, 5, 6, 6, 8, 10]
 */
const ap = (fns, list) =>
  fns.reduce((acc, f) =>
    acc.concat(list.map(f)), [])

export default curry(ap)
