import _curry2 from '../_internals/_curry2'

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
const eq = (a, b) => {
  if (a === b) {
    // +0 !== -0
    return a !== 0 || 1 / a === 1 / b
  }

  // NaN === NaN
  return a !== a && b !== b // eslint-disable-line no-self-compare
}

export default _curry2(eq)
