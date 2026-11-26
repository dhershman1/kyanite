import _curry2 from '../_internals/_curry2.js'
import _assocǃ from '../_internals/_assocǃ.js'
import _reduce from '../_internals/_reduce.js'
import keys from './keys.js'

/** @private @type {<T extends object>(fn: (value: any, key: string) => boolean, obj: T) => Partial<T>} */
const omitBy = (fn, obj) =>
  _reduce((k, acc) => fn(/** @type {any} */ (obj)[k], k) ? acc : _assocǃ(acc, k, /** @type {any} */ (obj)[k]), {}, keys(obj))

/**
 * @name omitBy
 * @function
 * @since v1.5.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> { k: v } -> { k: v }
 * @description
 * Builds a new object without the keys whose values pass the predicate function, the opposite of `pickBy`
 * @param  {Function} fn The function to run our values through the key is also provided to this function as the 2nd param
 * @param  {Object} obj The object to search through and filter
 * @return {Object} Returns the newly created data without the omitted values
 *
 * @example
 * import { omitBy } from 'kyanite'
 *
 * omitBy(x => typeof x === 'string', { test: '3432', thing: 123 }) // => { thing: 123 }
 * omitBy((_, k) => k === 'c', { a: 1, b: 2, c: 3 }) // => { a: 1, b: 2 }
 *
 * // omitBy is curried
 *
 * const omitStrings = omitBy(x => typeof x === 'string')
 *
 * omitStrings({ test: '3432', thing: 123 }) // => { thing: 123 }
 */
export default /** @type {{
  (fn: (value: any, key: string) => boolean): <T extends object>(obj: T) => Partial<T>
  <T extends object>(fn: (value: any, key: string) => boolean, obj: T): Partial<T>
}} */ (_curry2(omitBy))
