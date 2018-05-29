import concat from './concat'
import curry from './curry'

/**
 * @name update
 * @since v0.1.0
 * @category Array
 * @sig Number -> a -> [b] -> [c]
 * @description Add an item to an array within a certain index of the array
 * @param  {Number} index The index number to add at
 * @param  {Any} val What we want to add to our array
 * @param  {Array} list The array in question
 * @return {Array} Returns the modified array
 *
 * @example
 * update(2, 10, [1, 2, 3]); // => [1, 2, 10]
 *
 * // You can also use it as a curried method
 *
 * const updater = update(2, 10);
 *
 * updater([1, 2, 3]); // => [1, 2, 10]
 *
 * // This can be taken further like so
 *
 * const index = update(2);
 * const val = index(10);
 * val([1, 2, 3]); // => [1, 2, 10]
 */
const update = (index, val, list) =>
  concat([list.slice(0, index), val, list.slice(index + 1)])

export default curry(update)
