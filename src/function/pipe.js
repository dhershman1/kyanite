import _curry2 from '../_internals/_curry2.js'
import _reduce from '../_internals/_reduce.js'

/** @private @type {<R = any>(fns: ReadonlyArray<(a: any) => any>, init: any) => R} */
const pipe = (arr, init) =>
  _reduce((fn, acc) => fn(acc), init, arr)

/**
 * @name pipe
 * @function
 * @since v0.1.0
 * @category Function
 * @sig Array (a -> b) -> a -> b
 * @description Applies a sequence of transformations over a value.
 * @param {Array} arr The array of functions to apply to our value
 * @param {Any} init The value to apply our functions too
 * @return {Any} The transformed value
 *
 * @example
 * import { pipe } from 'kyanite'
 *
 * pipe([add(2), multiply(2)], 10) // => 24
 *
 * // It's also curried
 *
 * const piper = pipe([add(2), multiply(2)])
 *
 * piper(10) // => 24
 */
export default /** @type {{
  <R = any>(fns: ReadonlyArray<(a: any) => any>): (init: any) => R
  <R = any>(fns: ReadonlyArray<(a: any) => any>, init: any): R
}} */ (_curry2(pipe))
