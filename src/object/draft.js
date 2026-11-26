import _curry2 from '../_internals/_curry2.js'
import _assocǃ from '../_internals/_assocǃ.js'
import _reduce from '../_internals/_reduce.js'
import keys from './keys.js'

/** @private @type {<T, R1>(fn: (val: T) => R1, data: { [key: string]: T }) => { [key: string]: R1 }} */
const draft = (fn, obj) =>
  _reduce((key, acc) =>
    _assocǃ(acc, key, fn(obj[key])), {}, keys(obj))

/**
 * @name draft
 * @function
 * @since v0.6.0
 * @category Object
 * @sig Function (a -> b) -> Object { k: v }
 * @description Runs a provided function against all of the values that are within the provided object
 * @param {Function} fn The Function we want to apply to all of the data values
 * @param {Object} obj The object to apply our functions too
 * @return {Object} A new object with the updated data from our applied function
 * @example
 * import { draft } from 'kyanite'
 *
 * draft(x => x * 2, { a: 1, b: 2, c: 3 }) // => { a: 2, b: 4, c: 6 }
 *
 * // It's also curried
 *
 * const d = draft(x => x * 2)
 *
 * d({ a: 1, b: 2, c: 3 }) // => { a: 2, b: 4, c: 6 }
 */
export default /** @type {{
  <T, R1>(fn: (val: T) => R1): (data: { [key: string]: T }) => { [key: string]: R1 }
  <T, R1>(fn: (val: T) => R1, data: { [key: string]: T }): { [key: string]: R1 }
}} */ (_curry2(draft))
