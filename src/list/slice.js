import curry from '../function/curry'

/**
 * @name slice
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> List a -> List a
 * @description
 * Slices out items from a list type of data, like a list of characters or items
 * @param {Number} a The index at which to begin extraction
 * @param {Number} b The index for what the extraction goes to. However does not extract
 * @param {Array|String} list The list of items or characters to slice
 * @return {Array|String} The newly created list
 *
 * @example
 * slice(1, 3, [1, 2, 3, 4, 5]) // => [2, 3]
 * slice(0, 4, 'kyanite') // => 'kyan'
 *
 * // It is curried
 *
 * const slicer = slice(1, 3)
 *
 * slicer([1, 2, 3, 4, 5]) // => [2, 3]
 * slicer('kyanite') // => 'yan'
 */
const slice = (a, b, list) => list.slice(a, b)

export default curry(slice)
