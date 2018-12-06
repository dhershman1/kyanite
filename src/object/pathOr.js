import _curry3 from '../_internals/_curry3'
import isNil from '../function/isNil'
import path from './path'

/**
 * @name pathOr
 * @function
 * @since v0.10.2
 * @category Object
 * @sig a -> [key] -> { key: a } -> a
 * @description A safe way to find an item within an object, will return the provided default if it's not found or the value itself if it is found
 * @param {Any} a The default value to return if the value isn't found
 * @param {Array} keys The path to traverse the object with
 * @param {Object} obj The object to traverse
 * @return {Any} Either the found value or the provided default value
 * @example
 * import { pathOr } from 'kyanite'
 *
 * pathOr('N/A', ['a', 'b'], { a: { b: 1 } }) // => 1
 * pathOr('N/A', ['c', 'b'], { a: { b: 1 } }) // => 'N/A'
 *
 * // It's also curried
 * const fn = pathOr('N/A')
 * const withKeys = fn(['a', 'b'])
 *
 * fn(['c', 'd'], { c: { d: 2 } }) // => 2
 * withKeys({ a: { b: 1 } }) // => 1
 * fn(['c', 'd'], { d: { c: 1 } }) // => 'N/A'
 * withKeys({ b: { a: 1 } }) // => 'N/A'
 */
const pathOr = (a, keys, obj) => {
  const res = path(keys, obj)

  if (isNil(res)) {
    return a
  }

  return res
}

export default _curry3(pathOr)
