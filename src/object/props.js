import curry from '../function/curry'

/**
 * @name props
 * @since v0.4.0
 * @category Object
 * @sig Object { k: v } -> Array v
 * @description Pulls a list of values from an object and returns them as an array
 * @param {Array} keys The list of properties to get values from
 * @param {Object} obj The object to map through
 * @return {Array} An array of values pulled from the object
 * @example
 * props(['a', 'b'], { a: 1, b: 2, c: 3 }) // => [1, 2]
 *
 * // It's also curried
 *
 * const g = props(['a', 'b'])
 *
 * g({ a: 1, b: 2, c: 3 }) // => [1, 2]
 */
const props = (keys, obj) =>
  keys.map(k =>
    obj[k])

export default curry(props)
