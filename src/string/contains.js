import curry from '../function/curry'

/**
 * @name contains
 * @since v0.1.0
 * @category String
 * @sig String -> String -> Boolean
 * @description
 * Goes through a provided string and attempts to find the provided value within it
 * @param {String} str The string we want to search through
 * @param {String} a The string we want to find
 * @return {Boolean} Based on if the string is found or not
 * @example
 * contains('cow', 'small brown cow') // => true
 * contains('cow', 'Small Brown Cow') // => true
 *
 * const x = 'cow'
 *
 * contains('cow', `small brown ${x}`) // => true
 *
 * // It's also curried
 *
 * const checker = contains('cow')
 *
 * checker('small brown cow') // => true
 */
const contains = (a, str) => str.indexOf(a) !== -1

export default curry(contains)
