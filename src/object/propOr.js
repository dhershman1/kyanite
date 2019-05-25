import _curry3 from '../_internals/_curry3'
import isNil from '../function/isNil'
import prop from './prop'

/**
 * @name propOr
 * @function
 * @since v0.12.3
 * @category Object
 * @sig a -> String -> Object -> a
 * @description If the provided object contains it's own property with the specified name, that value is returned. Otherwise it will return the provided default value
 * @param {Any} def The default value to fallback to if the prop returned null
 * @param {String} key The property name within the provided object
 * @param {Object} obj The object to pull the property from
 * @return {Any} The value of the found prop, or the provided default value
 * @example
 * import { propOR } from 'kyanite'
 *
 * propOr('N/A', 'foo', { bar: 1, foo: 2 }) // => 2
 * propOr('N/A', 'foo', { bar: 1 }) // => 'N/A'
 *
 * // It's also curried
 * const fn = propOr('N/A')
 * const gn = fn('foo')
 *
 * fn('bar', { bar: 1 }) // => 1
 * fn('bar', { foo: 1 }) // => 'N/A'
 * gn({ foo: 1 }) // => 1
 * gn({ baz: 1 }) // => 'N/A'
 */
const propOr = (def, key, obj) => {
  const val = prop(key, obj)

  if (isNil(val)) {
    return def
  }

  return val
}

export default _curry3(propOr)
