import curry from './curry'

/**
 * @name includes
 * @since v2.0.0
 * @category String
 * @sig String -> String -> Boolean
 * @description
 * Goes through a provided string and attempts to find the provided value within it
 * @param {String} str The string we want to search through
 * @param {String} a The string we want to find
 * @return {Boolean} Based on if the string is found or not
 * @example
 * includes('cow', 'small brown cow'); // => true
 * includes('cow', 'Small Brown Cow'); // => true
 *
 * const x = 'cow';
 *
 * includes('cow', `small brown ${x}`); // => true
 *
 * // It's also curried
 *
 * const checker = includes('cow');
 *
 * checker('small brown cow'); // => true
 */
const includes = (a, str) => str.indexOf(a) !== -1

export default curry(includes)
