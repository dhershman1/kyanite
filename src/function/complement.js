import _curry2 from '../_internals/_curry2'
import not from './not'

/**
 * @name complement
 * @function
 * @since v0.1.0
 * @category Function
 * @description
 * Takes a function and returns the opposite boolean value of what the predicate returns
 * @param {Function} fn The function we want to apply the complement of
 * @param {Any} a The value our functionality is being ran against
 * @return {Function} Returns the opposite function back
 *
 * @example
 * import { complement } from 'kyanite'
 *
 * const isNot = complement(is(String))
 *
 * isNot(1) // => true
 * isNot('test') // => false
 */
const complement = (fn, a) => not(fn(a))

export default _curry2(complement)
