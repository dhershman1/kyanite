import curryN from './curryN'
import isNil from './isNil'

/**
 * @name path
 * @since v3.0.0
 * @category Object
 * @sig (a -> Array) -> Object -> a | Boolean
 * @description Find an item based on the function sent in and its list
 * @param  {Array} keys The path to safely traverse the object with
 * @param  {Object} obj The object to traverse
 * @return {Any} Returns Data if found, undfined if not
 *
 * @example
 *
 * path(['a', 'b'], { a: { b: 3 } }) // => 3
 * path(['a', 'b', 'c'], { a: 3 }) // => undefined
 *
 * // Is also curried
 *
 * const safetyPath = path(['a', 'b'])
 *
 * safetyPath({ a: { b: 2 } }) // => 2
 */
const path = ([p, ...keys], obj) => {
  if (!keys.length) {
    return obj[p]
  }

  if (isNil(obj[p])) {
    return undefined
  }

  return path(keys, obj[p])
}

export default curryN(2, path)
