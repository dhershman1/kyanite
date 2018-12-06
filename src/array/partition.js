import _curry2 from '../_internals/_curry2'
import juxt from '../function/juxt'
import filter from './filter'
import reject from './reject'

/**
 * @name partition
 * @function
 * @since v0.1.0
 * @category Array
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @description
 * Takes a predicate function and an array of data and returns the pair
 * One contains the data which passes the predicate function, the other is the values that did not
 * @param {Function} fn The predicate function to check each of the values
 * @param {Array} list The array to partition out
 * @return {Array} An array containing the first set of elements that passed the predicate function,
 * And a second that did not
 *
 * @example
 * import { partition } from 'kyanite'
 *
 * partition(is(String), ['foo', 'bar', 100]) // => [ ['foo', 'bar'], [100] ]
 *
 * // Is curried as well
 *
 * const part = partition(is(String))
 *
 * part(['foo', 'bar', 100]) // => [ ['foo', 'bar'], [100] ]
 */
const partition = juxt([filter, reject])

export default _curry2(partition)
