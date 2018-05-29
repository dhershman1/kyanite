import curry from './curry'

/**
 * @name intersection
 * @since v2.0.1
 * @category Array
 * @sig Array a -> Array a -> Array a
 * @description Returns an array containing elements present in both arrays
 * @param {Array} a Our first array value to compare with
 * @param {Array} b Our second array value to compare with
 * @return {Array} A new array containing values that both arrays had
 *
 * @example
 * intersection([1, 2, 3, 4], [3, 4, 5, 6]); // => [3, 4]
 *
 * // It's also curried
 *
 * const inter = intersection([1, 2, 3, 4]);
 *
 * inter([3, 4, 5, 6]); // => [3, 4]
 */
const intersection = (a, b) => a.filter(x => b.indexOf(x) !== -1)

export default curry(intersection)
