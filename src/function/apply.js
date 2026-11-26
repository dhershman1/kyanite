import _curry2 from '../_internals/_curry2.js'

/** @private @type {<T= any, TResult = any>(fn: (arg0: T) => TResult, args: T) => TResult} */
const apply = (fn, a) => fn(a)

/**
 * @name apply
 * @function
 * @since v0.9.0
 * @category Function
 * @sig (a -> b) -> a -> b
 * @description Applies a function to a parameter/argument. Useful for creating a fixed-arity function, also known as the A combinator
 * @param {Function} fn The function we want to apply to the data
 * @param {Any} a The parameter to call the function with
 * @return {Any} The result of whatever fn(a) will be
 * @example
 * import { apply } from 'kyanite'
 *
 * apply(x => x * 2, 2) // => 4
 *
 * // It's also curried
 * const fn = apply(x => x * 2)
 *
 * fn(2) // => 4
 * fn(100) // => 200
 */
export default /** @type {{
  <T= any, TResult = any>(fn: (arg0: T) => TResult): (args: T) => TResult
  <T= any, TResult = any>(fn: (arg0: T) => TResult, args: T): TResult
}} */ (_curry2(apply))
