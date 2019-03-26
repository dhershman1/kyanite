import _curry2 from '../_internals/_curry2'
import has from './has'

/**
 * @name memoizeWith
 * @function
 * @since v0.11.2
 * @category Function
 * @sig (* -> String) -> (* -> a) -> (* -> a)
 * @description Creates a new function that, when invoked, caches the result of calling fn for a given argument set and returns the result. Subsequent calls to the memoized fn with the same argument set will not result in an additional call to fn; instead, the cached result for that set of arguments will be returned. This is primarily based off the Ramda memoizeWith function. They really nailed down the aspect for this guy, you can find it here: https://ramdajs.com/docs/#memoizeWith
 * @param {Function} mFn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} The memoized version of `fn`
 * @example
 * import { memoizeWith, range, identity } from 'kyanite'
 *
 * let count = 0
 * const product = arr => arr.reduce((x, acc) => acc * x)
 * const factorial = memoizeWith(identity, n => {
 *   count += 1
 *
 *   return product(range(1, n + 1))
 * }
 *
 * factorial(5) // => 120
 * factorial(5) // => 120
 * console.log(count) // => 1
 */
const memoizeWith = (mFn, fn) => {
  const cache = {}

  return data => {
    const key = mFn(data)

    if (!has(key, cache)) {
      cache[key] = fn(data)
    }

    return cache[key]
  }
}

export default _curry2(memoizeWith)
