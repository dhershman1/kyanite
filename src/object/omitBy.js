import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'
import _reduce from '../_internals/_reduce'

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
 * const obj = omitBy(['test'], { test: '3432', thing: 123 }) // => { thing: 123 }
 * const arr = omitBy(['a', 'b'], { a: 1, b: 2, c: 3}) // => { c: 3 }
 *
 * // omitBy is curried
 *
 * const omitKeys = omitBy(['test'])
 *
 * omitKeys({ test: '3432', thing: 123 }) // => { thing: 123 }
 */
const omitBy = (fn, obj) =>
  _reduce((k, acc) => fn(obj[k], k) ? _assocǃ(acc, k, obj[k]) : acc, {}, Object.keys(obj))

export default _curry2(omitBy)
