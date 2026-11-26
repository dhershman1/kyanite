import concatMap from './concatMap.js'
import _curry2 from '../_internals/_curry2.js'
import identity from '../function/identity.js'

/** @private @type {<T = any>(i: number, x: ReadonlyArray<T>) => T[]} */
const remove = (i, x) =>
  concatMap(identity, [x.slice(0, i), x.slice(i + 1)])

/**
 * @name remove
 * @function
 * @since v0.1.0
 * @category Array
 * @sig Number -> [a] -> [b]
 * @description Remove an item from a certain point in the index
 * @param  {Number} i   The index number to remove from
 * @param  {Array} x The array in question
 * @return {Array}     returns the modified array back
 *
 * @example
 * import { remove } from 'kyanite'
 *
 * const test = remove(2, [1, 2, 3, 4]) // => [1, 2, 4]
 *
 * // This is also a curried method
 *
 * const remover = remove(2)
 * const test = remover([1, 2, 3, 4]) // => [1, 2, 4]
 */
export default /** @type {{
  (i: number): <T = any>(x: ReadonlyArray<T>) => T[]
  <T = any>(i: number, x: ReadonlyArray<T>): T[]
}} */ (_curry2(remove))
