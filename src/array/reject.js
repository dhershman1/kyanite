import _curry2 from '../_internals/_curry2.js'
import complement from '../function/complement.js'
import filter from './filter.js'
/** @import { Transformer } from '../_internals/_types.js' */

/** @private @type {<T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>) => T[]} */
// filter builds its transformer when it's handed one instead of a list, so reject works as a transducer too
const reject = (fn, arr) => filter(complement(fn), arr)

/**
 * @name reject
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> Boolean) -> Array [a] -> Array [a]
 * @description
 * Iterate through a list and reject any value that does not pass the provided function
 * @param {Function} fn The predicate function to run on our values
 * @param {Array} arr The filterable list to go through
 * @return {Array} Returns a new Array of values that were not rejected
 *
 * When it's used with `transduce` or `into`, `reject(fn)` drops the values that pass instead of building a new list
 *
 * @example
 * import { into, map, reject } from 'kyanite'
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
 *
 * // It also works as a transducer
 *
 * into([], [reject(isEven), map(x => x * 10)], [1, 2, 3, 4]) // => [10, 30]
 */
export default /** @type {{
  <T = any>(fn: (a: T) => boolean): {
    (xf: Transformer): Transformer
    (list: ReadonlyArray<T>): T[]
  }
  <T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[]
}} */ (_curry2(reject))
