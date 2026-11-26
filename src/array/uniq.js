import identity from '../function/identity.js'
import uniqBy from './uniqBy.js'
/** @import { Transformer } from '../_internals/_types.js' */

// uniqBy builds its transformer when it's handed one instead of a list, so uniq works as a transducer too
const uniq = uniqBy(identity)

/**
 * @name uniq
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> b) -> Array a -> Array a
 * @description Returns an array of unique values from the applied function
 * @param {Array} list The list to sift through
 * @return {Array} An array of uniq values from the provided function
 *
 * When it's used with `transduce` or `into`, pass `uniq` itself (it already takes just the list), and only the first of each value is passed along
 *
 * @example
 * import { into, map, uniq } from 'kyanite'
 *
 * uniq([1, 2, 2, 3, 3, 4, 5]) // => [1, 2, 3, 4, 5]
 *
 * // It also works as a transducer
 *
 * into([], [map(x => x % 3), uniq], [1, 2, 3, 4, 5, 6]) // => [1, 2, 0]
 */
export default /** @type {{
  (xf: Transformer): Transformer
  <T = any>(list: ReadonlyArray<T>): T[]
}} */ (uniq)
