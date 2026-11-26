import _curry2 from '../_internals/_curry2.js'
import _assocǃ from '../_internals/_assocǃ.js'
import _reduce from '../_internals/_reduce.js'
import keys from './keys.js'

/** @private @type {<T extends object>(fn: (value: any, key: string) => boolean, obj: T) => Partial<T>} */
const omitBy = (fn, obj) =>
  _reduce((k, acc) => fn(/** @type {any} */ (obj)[k], k) ? _assocǃ(acc, k, /** @type {any} */ (obj)[k]) : acc, {}, keys(obj))

/**
 * @name omitBy
 * @function
 * @since v1.5.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> { k: v } -> { k: v }
 * @description
 * Builds out a new object but omits the key values from the new object that do NOT pass the predicate function
 * @param  {Function} fn The function to run our values through the key is also provided to this function as the 2nd param
 * @param  {Object} obj The object to search through and filter
 * @return {Object} Returns the newly created data without the omitted values
 *
 * @example
 * import { omitBy } from 'kyanite'
 *
 * omitBy(x => typeof x === 'number', { test: '3432', thing: 123 }) // => { thing: 123 }
 * omitBy((_, k) => k === 'c', { a: 1, b: 2, c: 3 }) // => { c: 3 }
 *
 * // omitBy is curried
 *
 * const onlyNumbers = omitBy(x => typeof x === 'number')
 *
 * onlyNumbers({ test: '3432', thing: 123 }) // => { thing: 123 }
 */
export default /** @type {{
  (fn: (value: any, key: string) => boolean): <T extends object>(obj: T) => Partial<T>
  <T extends object>(fn: (value: any, key: string) => boolean, obj: T): Partial<T>
}} */ (_curry2(omitBy))
