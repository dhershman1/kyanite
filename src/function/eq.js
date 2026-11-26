import _curry2 from '../_internals/_curry2.js'

/** @private @type {<T>(a: T, b: T) => boolean} */
// SameValue equality: +0 and -0 are different, NaN equals NaN
const eq = (a, b) => Object.is(a, b)

/**
 * @name eq
 * @function
 * @since v0.10.0
 * @category Function
 * @sig a -> a-> Boolean
 * @description Performs an equality check of two values
 * @param  {Any} a The first value to compare
 * @param  {Any} b The second value to compare
 * @return {Boolean} Returns a boolean based on the check
 *
 * @example
 * import { eq } from 'kyanite'
 *
 * eq(1, 1) // => true
 * eq(NaN, NaN) // => true
 * eq([1], [1]) // => false
 *
 * const o = {}
 *
 * eq({}, {}) // => false
 * eq(o, o) // => true
 *
 * // eq is also curried
 *
 * const test = eq(NaN)
 * test(NaN) // => true
 */
export default /** @type {{
  <T>(a: T): (b: T) => boolean
  <T>(a: T, b: T): boolean
}} */ (_curry2(eq))
