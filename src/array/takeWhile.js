import curry from '../function/curry'

/**
 * @name takeWhile
 * @since v0.9.0
 * @category Array
 * @sig (a -> Boolean) -> Array [a] -> Array [a]
 * @description Takes values from an array and puts them into a new array while the function parameter returns true
 * @param {Function} fn The function ran against each value within the array should return a boolean
 * @param {Array} arr The array to take from
 * @return {Array} A new array of data that passed the param function
 * @example
 * takeWhile(x => x < 4, [1, 2, 3, 4, 5, 6]) // => [1, 2, 3]
 *
 * // It's also curried
 * const fn = takeWhile(x => x < 4)
 *
 * fn([1, 2, 3, 4, 5]) // => [1, 2, 3]
 * fn([3, 4, 5]) // => [3]
 */
const takeWhile = (fn, arr) => {
  const i = arr.findIndex(x => !fn(x))

  return i < 0 ? arr : arr.slice(0, i)
}

export default curry(takeWhile)
