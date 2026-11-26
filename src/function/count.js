import height from '../object/height.js'
import type from './type.js'

/** @private @type {<T = any, K = any, V = any>(a: string | ReadonlyArray<T> | Set<T> | Map<K, V> | object) => number} */
const count = a => {
  const key = type(a)
  // type() already told us what a is, TypeScript can't narrow from it
  const x = /** @type {any} */ (a)

  switch (key) {
    case 'Array':
    case 'String':
      return x.length
    case 'Object':
      return height(x)
    case 'Map':
    case 'Set':
      return x.size
    default:
      throw new TypeError(`Unsupported type: ${key}`)
  }
}

/**
 * @name count
 * @function
 * @since v0.11.0
 * @category Function
 * @sig a -> Number
 * @description Counts the number of values within a collection of data
 * Supports arrays, strings, objects, Maps, and Sets. Any other type throws a TypeError
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
 * count(5) // => TypeError: Unsupported type: Number
 */
export default /** @type {{
  <T = any, K = any, V = any>(a: string | ReadonlyArray<T> | Set<T> | Map<K, V> | object): number
}} */ (count)
