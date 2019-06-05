import _curry2 from '../_internals/_curry2'

/**
 * @name endsWith
 * @function
 * @since v0.13.1
 * @category String
 * @sig String -> String -> Boolean
 * @description Checks whether a String ends with the provided String (case sensitive)
 * @param {String|RegExp} a The String we want to search
 * @param {String} b The String we want to search for
 * @return {Boolean} The result of the search
 * @example
 * import { endsWith } from 'kyanite'
 *
 * endsWith('fooBar', 'foo') // => false
 * endsWith('fooBar', 'bar') // => true
 *
 * // It's also curried
 * const ends = endsWith('foo')
 *
 * ends('fooBar') // => false
 * ends('barFoo') // => true
 *
 */
const endsWith = (str1, str2) => str2.endsWith(str1)

export default _curry2(endsWith)
