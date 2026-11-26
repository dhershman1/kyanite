import _curry2 from '../_internals/_curry2.js'
import map from './map.js'
import prop from '../object/prop.js'

/** @private @type {<K extends PropertyKey, T extends { [P in K]?: any }>(p: K, list: ReadonlyArray<T>) => Array<T[K]>} */
const pluck = (p, list) =>
  map(/** @type {(a: any) => any} */ (prop(p)), list)

/**
 * @name pluck
 * @since v1.1.0
 * @function
 * @category Array
 * @sig String -> Array -> Array
 * @description Returns a new array by plucking the same named property off all objects in the array supplied
 * @param {String|Number} p The key to pluck the value of
 * @param {Array} list The list of objects to map through
 * @return {Array} A new array of values plucked from our original list
 * @example
 * import { pluck } from 'kyanite'
 *
 * pluck('age', [{ name: 'george', age: 19 }, { name: 'gavin', age: 26 }]) // => [19, 26]
 * pluck(0, [[1, 2], [3, 4]]) // => [1, 3]
 *
 * // It's also curried
 * const fn = pluck('age')
 *
 * fn([{ name: 'george', age: 19 }, { name: 'gavin', age: 26 }]) // => [19, 26]
 */
export default /** @type {{
  <K extends PropertyKey>(p: K): <T extends { [P in K]?: any }>(list: ReadonlyArray<T>) => Array<T[K]>
  <K extends PropertyKey, T extends { [P in K]?: any }>(p: K, list: ReadonlyArray<T>): Array<T[K]>
}} */ (_curry2(pluck))
