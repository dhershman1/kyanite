import _curry2 from '../_internals/_curry2'
import map from '../array/map'

/**
 * @name props
 * @function
 * @since v0.4.0
 * @category Object
 * @sig Object { k: v } -> Array v
 * @description Pulls a list of values from an object and returns them as an array
 * @param {Array} keys The list of properties to get values from
 * @param {Object} obj The object to map through
 * @return {Array} An array of values pulled from the object
 * @example
 * import { props } from 'kyanite'
 *
 * props(['a', 'b'], { a: 1, b: 2, c: 3 }) // => [1, 2]
 *
 * // It's also curried
 *
 * const g = props(['a', 'b'])
 *
 * g({ a: 1, b: 2, c: 3 }) // => [1, 2]
 */
const props = (keys, obj) =>
  map(k => obj[k], keys)

export default _curry2(props)
