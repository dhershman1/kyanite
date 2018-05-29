import curry from './curry'

/**
 * @name filter
 * @since v0.5.0
 * @category Array
 * @sig Filterable f => (a → Boolean) → f a → f a
 * @description Filter through a filterable data piece using the provided function
 * @param {Function} fn The predicate function to run on our values
 * @param {Array|Object} list The filterable list to go through
 * @return {Array|Object} Returns a new Array or Object based on the type of list provided
 *
 * @example
 * const isEven = n => n % 2 === 0;
 *
 * filter(isEven, [1, 2, 3, 4]); // => [2, 4]
 *
 * // Is also curried
 *
 * const filterer = filter(isEven);
 *
 * filterer([1, 2, 3, 4]); // => [2, 4]
 */
const filter = (fn, list) => list.filter(fn)

export default curry(filter)
