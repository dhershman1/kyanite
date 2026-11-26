import _curry3 from '../_internals/_curry3.js'
import isNil from '../function/isNil.js'
import prop from './prop.js'

/** @private @type {<T, P extends PropertyKey, O>(def: T, key: P, obj: O) => P extends keyof O ? NonNullable<O[P]> | T : T} */
const propOr = (def, key, obj) => {
  const val = prop(key, obj)

  if (isNil(val)) {
    return def
  }

  return /** @type {any} */ (val)
}

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
export default /** @type {{
  <T>(def: T): {
    <P extends PropertyKey>(key: P): <O>(obj: O) => P extends keyof O ? NonNullable<O[P]> | T : T
    <P extends PropertyKey, O>(key: P, obj: O): P extends keyof O ? NonNullable<O[P]> | T : T
  }
  <T, P extends PropertyKey>(def: T, key: P): <O>(obj: O) => P extends keyof O ? NonNullable<O[P]> | T : T
  <T, P extends PropertyKey, O>(def: T, key: P, obj: O): P extends keyof O ? NonNullable<O[P]> | T : T
}} */ (_curry3(propOr))
