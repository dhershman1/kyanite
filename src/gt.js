import curry from './curry'

/**
 * @name gt
 * @since v3.0.0
 * @category Function
 * @sig a -> a -> Boolean
 * @param {Any} a Value to determine if it is greater than the other
 * @param {Any} b Value to compare to see if it is less than the other
 * @return {Boolean} Based on the outcome of the logic a Boolean
 * @example
 * gt(2, 1) // => true
 * gt('b', 'a') // => true
 *
 * // It's also curried
 *
 * const g = gt(2)
 *
 * g(1) // => true
 * g(2) // => false
 */
const gt = (a, b) => a > b

export default curry(gt)
