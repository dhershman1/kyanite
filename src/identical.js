import curry from './curry'

/**
 * @name identical
 * @since v0.1.0
 * @category Relation
 * @sig a -> a-> Boolean
 * @description Performs a check to see if the items are identical in the sense that they reference the same memory
 * @param  {Any} a The first value to compare
 * @param  {Any} b The second value to compare
 * @return {Boolean}   Returns a boolean based on the check
 *
 * @example
 * identical(NaN, NaN) // => true
 * identical([1], [1]) // => false
 *
 * const o = {}
 *
 * identical({}, {}) // => false
 * identical(o, o) // => true
 *
 * // Identical is also curried
 *
 * const test = identical(NaN)
 * test(NaN) // => true
 */
const identical = (a, b) => {
  if (a === b) {
    // +0 !== -0
    return a !== 0 || 1 / a === 1 / b
  }

  // NaN === NaN
  return a !== a && b !== b // eslint-disable-line no-self-compare
}

export default curry(identical)
