import _curry2 from '../_internals/_curry2'

/**
 * @name includes
 * @function
 * @since v0.11.0
 * @category Array
 * @sig String -> Array -> Boolean
 * @description Searches through a provided array to find a given string
 * @param {String} str The string to search the array for
 * @param {Array} arr The array to search through
 * @return {Boolean} Whether or not the string was found within the array
 * @example
 * import { includes } from 'kyanite'
 *
 * includes('foo', ['test', 'bar', 'foo']) // => true
 * includes('foo', ['test', 'bar', 'baz']) // => false
 *
 * // It's also curried
 * const fn = includes('foo')
 *
 * fn(['test', 'bar', 'foo']) // => true
 * fn(['test', 'bar', 'baz']) // => false
 */
const includes = (str, arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === str) {
      return true
    }
  }

  return false
}

export default _curry2(includes)
