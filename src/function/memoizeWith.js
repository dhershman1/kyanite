import _curry2 from '../_internals/_curry2.js'
/**
 * @name memoizeWith
 * @function
 * @since v3.1.0
 * @category Function
 * @sig (*... -> String) -> function -> function
 * @description Wraps a function with a memoization layer to cache the results of the function
 * @param {Function} keyFn The function to generate a key to store the results
 * @param {Function} fn The function to wrap with memoization
 * @return {Function} A new function that will cache the results of the function
 * @example
 * import { memoizeWith } from 'kyanite'
 *
 * const add = (a, b) => a + b
 * const memoizedAdd = memoizeWith((a, b) => `${a}-${b}`, add)
 *
 * memoizedAdd(1, 2) // => 3
 * memoizedAdd(1, 2) // => 3 (cached)
 */
const memoizeWith = (keyFn, fn) => {
  const cache = {}

  return (...args) => {
    const key = keyFn(...args)
    const result = cache[key] = cache[key] || fn(...args)

    return result
  }
}

export default _curry2(memoizeWith)
