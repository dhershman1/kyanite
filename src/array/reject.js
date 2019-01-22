import _curry2 from '../_internals/_curry2'
import complement from '../function/complement'
import filter from './filter'

/**
 * @name reject
 * @function
 * @since v0.1.0
 * @category Function
 * @sig (a -> Boolean) -> Array [a] -> Array [a]
 * @description
 * Iterate through a list and reject any value that does not pass the provided function
 * @param {Function} fn The predicate function to run on our values
 * @param {Array} arr The filterable list to go through
 * @return {Array} Returns a new Array of values that were not rejected
 *
 * @example
 * import { reject } from 'kyanite'
 *
 * const isEven = n => n % 2 === 0
 *
 * reject(isEven, [1, 2, 3, 4]) // => [1, 3]
 * reject(x => x.val > 2, [{ val: 2 }, { val: 5 }, { val: 3 }]) // => [{ val: 2 }]
 *
 * // Is also curried
 *
 * const rejecter = reject(isEven)
 *
 * rejecter([1, 2, 3, 4]) // => [1, 3]
 */
const reject = (fn, arr) => filter(complement(fn), arr)

export default _curry2(reject)
