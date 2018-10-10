import curry from './curry'

/**
 * @name eq
 * @since v0.10.0
 * @category Function
 * @sig a -> a-> Boolean
 * @description Performs a check to see if the items are equal in the sense that they reference the same memory
 * @param  {Any} a The first value to compare
 * @param  {Any} b The second value to compare
 * @return {Boolean} Returns a boolean based on the check
 *
 * @example
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

export default curry(eq)
