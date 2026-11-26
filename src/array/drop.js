import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xdrop from '../_internals/_xdrop.js'
/** @import { Transformer } from '../_internals/_types.js' */

/** @private @type {<T = any>(n: number, list: ReadonlyArray<T> | string) => T[] | string} */
const drop = (i, list) => list.slice(Math.max(0, i), Infinity)

/**
 * @name drop
 * @since v0.2.2
 * @function
 * @category Array
 * @sig Number -> [a] -> [a]
 * @description Starts at a at desired index and pulls the values from that point until the end
 * @param {Number} i The index we want the slice to start at
 * @param {Array} list The array we want to drop from
 * @return {Array} An array with the indicated values removed from the array
 *
 * When it's used with `transduce` or `into`, `drop(i)` skips the first `i` values and passes along the rest
 *
 * @example
 * import { drop, into, map } from 'kyanite'
 *
 * drop(3, [1, 2, 3, 4, 5]) // => [4, 5]
 * drop(6, [1, 2, 3, 4, 5]) // => []
 * drop(-1, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
 *
 * // It's also curried
 *
 * const d = drop(3)
 *
 * d([1, 2, 3, 4, 5]) // => [4, 5]
 *
 * // It also works as a transducer
 *
 * into([], [drop(2), map(x => x * 10)], [1, 2, 3, 4]) // => [30, 40]
 */
export default /** @type {{
  <T = any>(n: number): {
    (xf: Transformer): Transformer
    (list: ReadonlyArray<T> | string): T[] | string
  }
  <T = any>(n: number, list: ReadonlyArray<T> | string): T[] | string
}} */ (_curry2(_dispatchable(_xdrop, drop)))
