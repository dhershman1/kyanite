import _assocǃ from '../_internals/_assocǃ'
import _curry2 from '../_internals/_curry2'
import includes from '../list/includes'
import not from '../function/not'
import reduce from '../function/reduce'

/**
 * @name omit
 * @function
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} → {String: *}
 * @description
 * Builds out a new object but omits the provided keys in the new one
 * @param  {Array} keys The keys in which to omit from the data
 * @param  {Object} obj The object to search through and filter
 * @return {Object} Returns the newly created data without the omitted values
 *
 * @example
 * import { omit } from 'kyanite'
 *
 * const obj = omit(['test'], { test: '3432', thing: 123 }) // => { thing: 123 }
 * const arr = omit(['a', 'b'], { a: 1, b: 2, c: 3}) // => { c: 3 }
 *
 * // omit is curried
 *
 * const omitKeys = omit(['test'])
 *
 * omitKeys({ test: '3432', thing: 123 }) // => { thing: 123 }
 */
const omit = (keys, obj) =>
  reduce((prop, acc) =>
    not(includes(prop, keys)) ? _assocǃ(acc, prop, obj[prop]) : acc, {}, Object.keys(obj))

export default _curry2(omit)
