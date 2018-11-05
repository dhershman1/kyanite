import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'

/**
 * @name omit
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} → {String: *}
 * @description Create a new Array/Object by omitting the requested values
 * @param  {Array} key The key(s) in which to omit from the data
 * @param  {Object} x The object to search through and filter
 * @return {Object} Returns the newly created data without the omitted values
 *
 * @example
 * const obj = omit('test', { test: '3432', thing: 123 }) // => { thing: 123 }
 * const arr = omit(['a', 'b'], { a: 1, b: 2, c: 3}) // => { c: 3 }
 *
 * // omit is curried
 *
 * const omitKeys = omit('test')
 *
 * omitKeys({ test: '3432', thing: 123 }) // => { thing: 123 }
 */
const omit = (keys, x) =>
  Object.keys(x).reduce((acc, prop) =>
    !keys.includes(prop) ? _assocǃ(acc, prop, x[prop]) : acc, {})

export default _curry2(omit)
