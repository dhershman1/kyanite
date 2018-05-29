import curry from './curry'

/**
 * @name gte
 * @since v3.0.0
 * @category Function
 * @sig a -> a -> Boolean
 * @param {Any} a Value to determine if it is greater than or equal to the other
 * @param {Any} b Value to compare to see if it is less than or equal to the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * gte(2, 1) // => true
 * gte(1, 1) // => true
 * gte('b', 'a') // => true
 *
 * // It's also curried
 *
 * const g = gte(2)
 *
 * g(1) // => true
 * g(2) // => true
 * g(3) // => false
 */
const gte = (a, b) => a >= b

export default curry(gte)
