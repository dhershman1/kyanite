import height from '../object/height'
import type from './type'

/**
 * @name count
 * @function
 * @since v0.11.0
 * @category Function
 * @sig a -> Number
 * @description Counts the number of values within a collection of data
 * @param {Array|String|Object|Map|Set} a The data to count
 * @return {Number} The number of counted values within the provided data
 * @example
 * import { count } from 'kyanite'
 *
 * count([1, 2, 3]) // => 3
 * count({ a: 1, b: 2, c: 3 }) // => 3
 * count('coolkid') // => 7
 * count(new Map([['a', 1], ['b', 2], ['c', 3]])) // => 3
 * count(new Set([1, 2, 3])) // => 3
 * count([]) // => 0
 * count({}) // => 0
 * count('') // => 0
 * count(new Map()) // => 0
 * count(new Set()) // => 0
 */
const count = a => {
  const key = type(a)

  switch (key) {
    case 'Array':
    case 'String':
      return a.length
    case 'Object':
      return height(a)
    case 'Map':
    case 'Set':
      return a.size
    default:
      throw new TypeError(`Unsupported type: ${key}`)
  }
}

export default count
