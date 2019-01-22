import _curry3 from '../_internals/_curry3'

/**
 * @name replace
 * @function
 * @since v0.10.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @description Replaces a substring or regex match in a string and then replaces it with the provided value
 * @param {String|RegExp} a The String or RegExp we want to find and replace
 * @param {String} b The value we want to replace it with
 * @param {String} str The String to search through
 * @return {String} The resulting string
 * @example
 * import { replace } from 'kyanite'
 *
 * replace('foo', 'bar', 'foofoo') // => 'barfoo'
 * replace(/foo/g, 'bar', 'foofoo') // => 'barbar'
 *
 * // It's also curried
 * const rep = replace('foo')
 * const with = rep('bar')
 *
 * rep('baz', 'foofoo') // => 'bazfoo'
 * with('foofoo') // => 'barfoo'
 */
const replace = (a, b, str) => str.replace(a, b)

export default _curry3(replace)
