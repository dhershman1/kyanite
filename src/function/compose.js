import _curry3 from '../_internals/_curry3.js'

/** @private @type {<T = any, R1 = any, R2 = any>(fn: (data: R1) => R2, gn: (data: T) => R1, data: T) => R2} */
const compose = (fn, gn, a) =>
  fn(gn(a))

/**
 * @name compose
 * @function
 * @since v0.9.0
 * @category Function
 * @sig (a -> b) -> (b -> c) -> a -> c
 * @description Applies value through two functions, from right to left, also known as the B combinator
 * @param {Function} fn The second function to apply to our result of the first
 * @param {Function} gn The first function to run against the data
 * @param {Any} a The data to compose our functions on
 * @return {Any} The result of our function composition
 * @example
 * import { compose } from 'kyanite'
 *
 * compose(Math.sqrt, x => x + 1, 99) // => 10
 *
 * // It's also curried
 *
 * const comp = compose(Math.sqrt, x => x + 1)
 *
 * comp(99) // => 10
 * comp(399) // => 20
 */
export default /** @type {{
  <R1 = any, R2 = any>(fn: (data: R1) => R2): {
    <T = any>(gn: (data: T) => R1): (data: T) => R2
    <T = any>(gn: (data: T) => R1, data: T): R2
  }
  <T = any, R1 = any, R2 = any>(fn: (data: R1) => R2, gn: (data: T) => R1): (data: T) => R2
  <T = any, R1 = any, R2 = any>(fn: (data: R1) => R2, gn: (data: T) => R1, data: T): R2
}} */ (_curry3(compose))
