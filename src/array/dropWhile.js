import _curry2 from '../_internals/_curry2.js'
import findIndex from './findIndex.js'

/**
 * @name dropWhile
 * @function
 * @since v0.9.0
 * @category Array
 * @sig (a -> Boolean) -> [a] -> [a]
 * @description Runs through an array and drops values so long as the function used returns true once the function returns false iteration will stop
 * @param {Function} fn The function to apply per iteration
 * @param {Array} arr The array of data to iterate through
 * @return {Array} A new array without the dropped values
 * @example
 * import { dropWhile } from 'kyanite'
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
  const i = findIndex(x => !fn(x), arr)

  return i < 0 ? [] : arr.slice(i)
}

export default _curry2(dropWhile)
