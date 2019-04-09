import _curry2 from '../_internals/_curry2'
import isNil from '../function/isNil'

/**
 * @name path
 * @function
 * @since v0.1.0
 * @category Object
 * @sig [k] -> { k: a } -> a | Undefined
 * @description Safe way to find a value within an object will return the value if found, undefined if not
 * @param  {Array} keys The path to safely traverse the object with
 * @param  {Object} obj The object to traverse
 * @return {Any} Returns the value if found, undefined if not
 *
 * @example
 * import { path } from 'kyanite'
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
  if (isNil(obj) || isNil(obj[p])) {
    return undefined
  }

  if (!keys.length) {
    return obj[p]
  }

  return path(keys, obj[p])
}

export default _curry2(path)
