import curry from './curry'

/**
 * @name partition
 * @since v0.5.0
 * @category Array
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @description
 * Takes a predicate function and a list or filterable data object and returns the pair.
 * One contains the data which passed the predicate function, the other the values that did not.
 * @param {Function} fn The predicate function to determine which side an element belongs to
 * @param {Array} list The list or other filterable to partition through
 * @return {Array} An array containing the first set of elements that passed the predicate function,
 * And a second that did not
 *
 * @example
 * partition(is(String), ['foo', 'bar', 100]); // => [ ['foo', 'bar'], [100] ]
 *
 * // Is curried as well
 *
 * const part = partition(is(String));
 *
 * part(['foo', 'bar', 100]); // => [ ['foo', 'bar'], [100] ]
 */
const partition = (fn, list) =>
  list.reduce(([pass, fail], v) =>
    fn(v) ? [pass.concat(v), fail] : [pass, fail.concat(v)], [[], []])

export default curry(partition)
