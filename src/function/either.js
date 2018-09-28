import curry from './curry'

/**
 * @name either
 * @since v0.9.0
 * @category Function
 * @sig (a -> Boolean)-> (a -> Boolean) -> a -> Boolean
 * @description Validates that the value passes in either the first or second function
 * @param {Function} fn The first function to test the value in
 * @param {Function} gn The second function to test the value in
 * @param {Any} a The value to run in the two functions
 * @return {Boolean} Based on if either functions return a truthy value when ran
 *
 * @example
 *
 * either(x => x > 10, x => x < 20, 21) // => true
 *
 * // It's also curried
 *
 * const e = either(x => x < 10, x => x === 11)
 *
 * e(20) // => false
 * e(9) // => true
 * e(11) // => true
 */
const either = (fn, gn, a) => fn(a) || gn(a)

export default curry(either)
