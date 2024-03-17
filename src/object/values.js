import _reduce from '../_internals/_reduce.js'
import _appendǃ from '../_internals/_appendǃ.js'
import keys from './keys.js'

/**
 * @name values
 * @function
 * @since v1.4.0
 * @category Object
 * @sig Object { k: v } -> Array v
 * @description Takes an object and returns a list of the object values
 * @param {Object} obj The object to grab the values from
 * @return {Array} An array of values pulled from the object
 * @example
 * import { values } from 'kyanite'
 *
 * values({ a: 1, b: 2, c: 3 }) // => [1, 2, 3]
 */
const values = obj =>
  _reduce((k, acc) => _appendǃ(acc, obj[k]), [], keys(obj))

export default values
