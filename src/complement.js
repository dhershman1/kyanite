import curry from './curry'
import not from './not'

/**
 * @name complement
 * @since v0.6.0
 * @category Function
 * @description
 * Takes a function and returns a new function that when called returns the opposite truthy/falsy value of
 * what was passed in.
 * @param {Function} fn The function we want to apply the complement of
 * @param {Any} a The value our functionality is being ran against
 * @return {Function} Returns the opposite function back
 *
 * @example
 * const isNot = complement(is(String));
 *
 * isNot(1); // => true
 * isNot('test'); // => false
 */
const complement = (fn, a) => not(fn(a))

export default curry(complement)
