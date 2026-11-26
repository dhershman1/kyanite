import _curry4 from '../_internals/_curry4.js'

/** @private @type {<T, T1, TResult>(fn: (a: T1, b: T1) => TResult, gn: (x: T) => T1, a: T, b: T) => TResult} */
const on = (fn, gn, a, b) => fn(gn(a), gn(b))

/**
 * @name on
 * @function
 * @since v0.4.0
 * @category Function
 * @sig (c -> c -> d) -> (a -> b -> c) -> a -> b -> d
 * @description
 * Applies the second function to the values passed in, and then runs the first function against those new values,
 * also known as the P combinator
 * @param {Function} fn The first function being ran against the values from the second
 * @param {Function} gn The function to be applied to the two values passed in
 * @param {Any} a The first value to use
 * @param {Any} b The second value we want to use
 * @return {Any} A value based on the first functions return
 * @example
 * import { on } from 'kyanite'
 *
 * on((x, y) => x === y, x => x.length, 'you', 'are') // => true
 *
 * // It's also curried
 *
 * const f = on((x, y) => x === y)
 *
 * f(x => x.length, 'you', 'are') // => true
 *
 * const g = f(x => x.length)
 *
 * g('you', 'are') // => true
 *
 * const h = f('you')
 *
 * h('are') // => true
 */
export default /** @type {{
  <T1, TResult>(fn: (a: T1, b: T1) => TResult): {
    <T>(gn: (x: T) => T1): {
      (a: T): (b: T) => TResult
      (a: T, b: T): TResult
    }
    <T>(gn: (x: T) => T1, a: T): (b: T) => TResult
    <T>(gn: (x: T) => T1, a: T, b: T): TResult
  }
  <T, T1, TResult>(fn: (a: T1, b: T1) => TResult, gn: (x: T) => T1): {
    (a: T): (b: T) => TResult
    (a: T, b: T): TResult
  }
  <T, T1, TResult>(fn: (a: T1, b: T1) => TResult, gn: (x: T) => T1, a: T): (b: T) => TResult
  <T, T1, TResult>(fn: (a: T1, b: T1) => TResult, gn: (x: T) => T1, a: T, b: T): TResult
}} */ (_curry4(on))
