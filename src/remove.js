import concat from './concat'
import curry from './curry'

/**
 * @name remove
 * @since v0.1.0
 * @category Array
 * @sig Number -> [a] -> [b]
 * @description Remove an item from a certain point in the index
 * @param  {Number} i   The index number to remove from
 * @param  {Array} x The array in question
 * @return {Array}     returns the modified array back
 *
 * @example
 * const test = remove(2, [1, 2, 3, 4]); // => [1, 2, 4]
 *
 * // This is also a curried method
 *
 * const remover = remove(2);
 * const test = remover([1, 2, 3, 4]); // => [1, 2, 4]
 */
const remove = (i, x) =>
  concat([x.slice(0, i), x.slice(i + 1)])

export default curry(remove)
