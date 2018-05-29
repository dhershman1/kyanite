import curry from './curry'

/**
 * @name slice
 * @since v2.0.0
 * @category Array
 * @sig Number -> Number -> Array a -> Array a
 * @description
 * Returns a subset of an array based on the provided indexes
 * @param {Number} a The index at which to begin extraction
 * @param {Number} b The index for what the extraction goes to. However does not extract
 * @return {Array} The newly created subset Array
 *
 * @example
 * slice(1, 3, [1, 2, 3, 4, 5]); // => [2, 3]
 *
 * // It is curried
 *
 * const slicer = slice(1, 3);
 *
 * slicer([1, 2, 3, 4, 5]); // => [2, 3]
 */
const slice = (a, b, list) => list.slice(a, b)

export default curry(slice)
