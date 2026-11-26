import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xtake from '../_internals/_xtake.js'
/** @import { Transformer } from '../_internals/_types.js' */

/** @private @type {<T = any>(i: number, list: ReadonlyArray<T> | string) => T[] | string} */
const take = (i, list) => list.slice(0, i)

/**
 * @name take
 * @function
 * @since v0.2.2
 * @category Array
 * @sig Number -> Array -> Array
 * @description Takes the values from an array up until the point specified, then brings those values back
 * @param {Number} i The index we want our take to start at
 * @param {Array} list The array we are taking from
 * @return {Array} A new array of the values taken
 *
 * When it's used with `transduce` or `into`, `take(i)` passes along the first `i` values then stops, nothing after them is looked at
 *
 * @example
 * import { into, map, take } from 'kyanite'
 *
 * take(3, [1, 2, 3, 4, 5]) // => [1, 2, 3]
 *
 * // It's also curried
 *
 * const t = take(3)
 *
 * t([1, 2, 3, 4, 5]) // => [1, 2, 3]
 *
 * // It also works as a transducer, stopping as soon as it has enough
 *
 * into([], [map(x => x * 2), take(2)], [1, 2, 3, 4, 5]) // => [2, 4], map only ran twice
 */
export default /** @type {{
  <T = any>(i: number): {
    (xf: Transformer): Transformer
    (list: ReadonlyArray<T> | string): T[] | string
  }
  <T = any>(i: number, list: ReadonlyArray<T> | string): T[] | string
}} */ (_curry2(_dispatchable(_xtake, take)))
