import curry from './curry'

/**
 * @name both
 * @since v0.2.0
 * @category Function
 * @sig Function -> Function -> Any -> Boolean
 * @description Validates that the same value passed into two different functions returns truthy for both
 * @param {Function} f The first function to test the value in
 * @param {Function} g The second function to test the value in
 * @param {Any} a The value to run in the previous two functions
 * @return {Boolean} Based on if both functions return a truthy value when ran
 *
 * @example
 *
 * both(x => x > 10, x => x < 20, 15) // => true
 *
 * // It's also curried
 *
 * const b = both(x => x > 10, x => x < 20)
 *
 * b(15) // => true
 * b(9) // => false
 */
const both = (f, g, a) => f(a) && g(a)

export default curry(both)
