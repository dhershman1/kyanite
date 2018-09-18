import curry from '../function/curry'

/**
 * @name includes
 * @since v0.1.0
 * @category Array
 * @sig a → Array a → Boolean
 * @description
 * Checks to see if the provided list contains at at least 1 of the provided value within it
 * @param {Any} a The value we want to search the list for
 * @param {Array} list The list we want to search through
 * @return {Boolean} A Boolean based on if the value is found or not
 *
 * @example
 * includes(3, [1, 2, 3]) // => true
 *
 * // It is also curried
 *
 * const checker = includes(3)
 *
 * checker([1, 2, 3]) // => true
 */
const includes = (a, list) =>
  list.indexOf(a) !== -1

export default curry(includes)
