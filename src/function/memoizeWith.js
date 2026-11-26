import _curry2 from '../_internals/_curry2.js'
/** @private @type {<T extends (...args: readonly any[]) => any>(keyFn: (...v: Parameters<T>) => string, fn: T ) => T} */
const memoizeWith = (keyFn, fn) => {
  /** @type {{ [key: string]: any }} */
  const cache = {}

  return /** @type {any} */ ((/** @type {any} */ ...args) => {
    const key = keyFn(...args)
    const result = cache[key] = cache[key] || fn(...args)

    return result
  })
}

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
export default /** @type {{
  <T extends (...args: readonly any[]) => any>(keyFn: (...v: Parameters<T>) => string, fn: T ): T
}} */ (_curry2(memoizeWith))
