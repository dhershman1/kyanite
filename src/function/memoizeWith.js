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
 * const withAge = memoizeWith(o => `${o.birth}/${o.death}`, ({birth, death}) => {
 *  console.log(`Calculating age for ${birth} and ${death}`)
 *  return ({ birth, death, age: death - birth })
 * })
 *
 * withAge({birth: 1921, death: 1999});
 * //=> LOG: computing age for 1921/1999
 * //=> {birth: 1921, death: 1999, age: 78} (returned from fn)
 *
 * withAge({birth: 1921, death: 1999});
 * //=> {birth: 1921, death: 1999, age: 78} (returned from cache)
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
