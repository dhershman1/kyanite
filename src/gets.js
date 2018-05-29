import curry from './curry'

/**
 * @name gets
 * @since v3.0.0
 * @category Object
 * @sig Object { k: v } -> Array v
 * @description Pulls a list of values from an object and returns them as an array
 * @param {Array} keys The list of properties to get values from
 * @param {Object} obj The object to map through
 * @return {Array} An array of values pulled from the object
 * @example
 * gets(['a', 'b'], { a: 1, b: 2, c: 3 }) // => [1, 2]
 *
 * // It's also curried
 *
 * const g = gets(['a', 'b'])
 *
 * g({ a: 1, b: 2, c: 3 }) // => [1, 2]
 */
const gets = (keys, obj) =>
  keys.map(k =>
    obj[k])

export default curry(gets)
