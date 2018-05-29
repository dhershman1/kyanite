import curry from './curry'

/**
 * @name lte
 * @since v3.0.0
 * @category Function
 * @sig a -> a -> Boolean
 * @param {Any} a Value to determine if it is greater than or equal to the other
 * @param {Any} b Value to compare to see if it is less than or equal to the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * lte(1, 2) // => true
 * lte(1, 1) // => true
 * lte('a', 'b') // => true
 *
 * // It's also curried
 *
 * const g = lte(2)
 *
 * g(1) // => false
 * g(2) // => true
 * g(3) // => true
 */
const lte = (a, b) => a <= b

export default curry(lte)
