import curry from './curry'

/**
 * @name difference
 * @since v2.0.0
 * @category Array
 * @sig Array a -> Array a -> Array a
 * @description Returns an array with the elements present in the first that are not in the second
 * @param {Array} first The list to search through
 * @param {Array} second The second list to compare against
 * @return {Array} An array of elements present in the first that are not in the second
 *
 * @example
 *
 * difference([1, 2, 3], [1]); // => [2, 3];
 *
 * // It's also curried
 * const diff = difference([1, 2, 3]);
 *
 * diff([1]); // => [2, 3]
 */
const difference = (first, second) => first.filter(x => second.indexOf(x) === -1)

export default curry(difference)
