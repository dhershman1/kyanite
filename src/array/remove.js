import concatMap from './concatMap'
import _curry2 from '../_internals/_curry2'
import identity from '../function/identity'

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
const remove = (i, x) =>
  concatMap(identity, [x.slice(0, i), x.slice(i + 1)])

export default _curry2(remove)
