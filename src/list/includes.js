import curry from '../function/curry'

/**
 * @name includes
 * @since v0.1.0
 * @category List
 * @sig a → List a → Boolean
 * @description
 * Checks to see if the provided list contains at least 1 of the provided value within it
 * @param {Any} value The value we want to search the list for
 * @param {Array|String} list The list of items or characters we want to search through
 * @return {Boolean} A Boolean based on if the value is found or not
 * @example
 * includes(3, [1, 2, 3]) // => true
 * includes('yan', 'kyanite') // => true
 *
 * // It is also curried
 *
 * const checker = includes(3)
 *
 * checker([1, 2, 3]) // => true
 * checker('123') // => true
 */
const includes = (value, list) =>
  list.indexOf(value) !== -1

export default curry(includes)
