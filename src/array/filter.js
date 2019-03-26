import _appendǃ from '../_internals/_appendǃ'
import _curry2 from '../_internals/_curry2'
import reduce from '../function/reduce'

/**
 * @name filter
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> Boolean) -> [a] -> [a]
 * @description Filter through a filterable data piece using the provided function
 * @param {Function} fn The predicate function to run on our values
 * @param {Array} arr The filterable list to go through
 * @return {Array} Returns a new Array based on the type of list provided
 * @example
 * import { filter } from 'kyanite'
 *
 * const isEven = n => n % 2 === 0
 *
 * filter(isEven, [1, 2, 3, 4]) // => [2, 4]
 *
 * // Is also curried
 *
 * const filterer = filter(isEven)
 *
 * filterer([1, 2, 3, 4]) // => [2, 4]
 */
const filter = (fn, arr) =>
  reduce((val, acc) => fn(val) ? _appendǃ(acc, val) : acc, [], arr)

export default _curry2(filter)
