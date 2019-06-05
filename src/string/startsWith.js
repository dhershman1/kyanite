import _curry2 from '../_internals/_curry2'

/**
 * @name startsWith
 * @function
 * @since v0.13.1
 * @category String
 * @sig String -> String -> Boolean
 * @description Checks whether a String starts with the provided String (case sensitive)
 * @param {String|RegExp} a The String we want to search
 * @param {String} b The String we want to search for
 * @return {Boolean} The result of the search
 * @example
 * import { startsWith } from 'kyanite'
 *
 * startsWith('fooBar', 'foo') // => true
 * startsWith('fooBar', 'bar') // => false
 *
 * // It's also curried
 * const starts = startsWith('foo')
 *
 * starts('fooBar') // => true
 *
 */
const startsWith = (str1, str2) => str2.startsWith(str1)

export default _curry2(startsWith)
