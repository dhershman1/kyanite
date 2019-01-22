import _curry2 from '../_internals/_curry2'
import _appendǃ from '../_internals/_appendǃ'
import reduce from '../function/reduce'

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
const partition = (fn, list) =>
  reduce((v, [pass, fail]) =>
    fn(v) ? [_appendǃ(pass, v), fail] : [pass, _appendǃ(fail, v)], [[], []], list)

export default _curry2(partition)
