import _appendǃ from '../_internals/_appendǃ.js'
import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xfilter from '../_internals/_xfilter.js'
/** @import { Transformer } from '../_internals/_types.js' */
import _reduce from '../_internals/_reduce.js'

/** @private @type {<T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>) => T[]} */
const filter = (fn, arr) =>
  _reduce((val, acc) => fn(val) ? _appendǃ(acc, val) : acc, [], arr)

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
 *
 * When it's used with `transduce` or `into`, `filter(fn)` only lets the values that pass through instead of building a new list
 * @example
 * import { filter, into, map } from 'kyanite'
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
 *
 * // It also works as a transducer
 *
 * into([], [filter(isEven), map(x => x * 10)], [1, 2, 3, 4]) // => [20, 40]
 */
export default /** @type {{
  <T = any>(fn: (a: T) => boolean): {
    (xf: Transformer): Transformer
    (list: ReadonlyArray<T>): T[]
  }
  <T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[]
}} */ (_curry2(_dispatchable(_xfilter, filter)))
