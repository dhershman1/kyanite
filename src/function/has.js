import _curry2 from '../_internals/_curry2'
import type from './type'

/**
 * @name has
 * @function
 * @since v0.11.0
 * @category Function
 * @sig a -> Boolean
 * @description
 * Checks if the provided key/value exsists within the given data the data should be a supported type
 * Supported types: Array, String, Object, Map, and Set
 * @param {String} key The key or value to check for
 * @param {Array|String|Object|Map|Set} data The data to search through
 * @return {Any} The value found within the data
 * @example
 * import { has } from 'kyanite'
 *
 * has('foo', { foo: 1 }) // => true
 * has('foo', ['bar', 'foo', 'baz']) // => true
 * has('foo', 'barfoobaz') // => true
 * has('foo', new Map([['foo', 1], ['bar', 2]])) // => true
 * has('foo', new Set(['bar', 'foo', 'baz'])) // => true
 *
 * has('foo', 1) // => TypeError: Unsupported type: Number
 * has('foo', /[foo]/g) // => TypeError: Unsupported type: RegExp
 *
 * // It's also curried
 * const fn = has('foo')
 *
 * fn({ foo: 1 }) // => true
 * fn(new Map([['foo', 1]]) // => true
 * fn(['bar']) // => false
 */
const has = (key, data) => {
  const t = type(data)

  switch (t) {
    case 'Array':
    case 'String':
      return data.includes(key)
    case 'Object':
    case 'Arguments':
      return Object.prototype.hasOwnProperty.call(data, key)
    case 'Map':
    case 'Set':
      return data.has(key)
    default:
      throw new TypeError(`Unsupported type: ${t}`)
  }
}

export default _curry2(has)
