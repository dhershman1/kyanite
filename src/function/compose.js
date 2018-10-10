import curry from './curry'

/**
 * @name compose
 * @since v0.9.0
 * @category Function
 * @sig (a -> b) -> (b -> c) -> a -> c
 * @description Applies value through two functions, from right to left
 * @param {Function} fn The second function to apply to our result of the first
 * @param {Function} gn The first function to run against the data
 * @param {Any} a The data to compose our functions on
 * @return {Any} The result of our function composition
 * @example
 * compose(Math.sqrt, x => x + 1, 99) // => 10
 *
 * // It's also curried
 *
 * const comp = compose(Math.sqrt, x => x + 1)
 *
 * comp(99) // => 10
 * comp(399) // => 20
 */
const compose = (fn, gn, a) =>
  fn(gn(a))

export default curry(compose)
