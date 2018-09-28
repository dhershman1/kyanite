import curry from '../function/curry'

/**
 * @name dropWhile
 * @since v0.9.0
 * @category Array
 * @sig (a -> Boolean) -> Array [a] -> Array [a]
 * @description Runs through an array and drops values so long as the function used returns true once the function returns false iteration will stop
 * @param {Function} fn The function to apply per iteration
 * @param {Array} arr The array of data to iterate through
 * @return {Array} A new array without the dropped values
 * @example
 *
 * dropWhile(x => x <= 2, [1, 2, 3, 4, 3, 2, 1]) //=> [3, 4, 3, 2, 1]
 *
 * // It's also curried
 * const fn = dropWhile(x => x <= 2)
 *
 * fn([1, 2, 3, 4, 3, 2, 1]) //=> [3, 4, 3, 2, 1]
 * fn([-1, 0, 1, 2, 3]) // => [3]
 */
const dropWhile = (fn, arr) => {
  const i = arr.findIndex(x => !fn(x))

  return i < 0 ? [] : arr.slice(i)
}

export default curry(dropWhile)
