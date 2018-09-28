import curry from './curry'

/**
 * @name lt
 * @since v0.1.0
 * @category Function
 * @sig a -> a -> Boolean
 * @description Checks if a value is less than the other
 * @param {Any} a Value to determine if it is greater than the other
 * @param {Any} b Value to compare to see if it is less than the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * lt(1, 2) // => true
 * lt('a', 'b') // => true
 *
 * // It's also curried
 *
 * const g = lt(2)
 *
 * g(1) // => false
 * g(2) // => false
 * g(3) // => true
 */
const lt = (a, b) => b < a

export default curry(lt)
