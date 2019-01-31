import _curry2 from '../_internals/_curry2'

/* eslint-disable no-labels */

/**
 * @name fuzzySearch
 * @function
 * @since v0.1.0
 * @sig a -> Boolean
 * @category String
 * @description Fuzzy search setup to look find things fast, effective, and probably the most out of place function here. But it works well so it's hard to get rid of
 * @param  {String} needle The Item to search
 * @param  {String} haystack The value to search for
 * @return {Boolean} Returns a boolean determined by if the value is found or not by the search
 *
 * @example
 * import { fuzzySearch } from 'kyanite'
 *
 * fuzzySearch('te', 'test') // => true
 * fuzzySearch('dog', 'testing') // => false
 *
 * // search is also curried
 *
 * const search = fuzzySearch('te')
 * search('test') // => true
 */
const fuzzySearch = (needle, haystack) => {
  const hLen = haystack.length
  const nLen = needle.length
  let j = 0

  if (nLen > hLen) {
    return false
  }

  if (nLen === hLen) {
    return needle === haystack
  }

  outer: for (let i = 0; i < nLen; i++) {
    const nChar = needle.charCodeAt(i)

    for (j; j < hLen; j++) {
      if (haystack.charCodeAt(j) === nChar) {
        continue outer
      }
    }

    return false
  }

  return true
}

export default _curry2(fuzzySearch)
