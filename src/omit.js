import curry from './curry'
import ensureArray from './ensureArray'

/**
 * @name omit
 * @since v0.4.0
 * @category Object
 * @sig [String] -> {String: *} → {String: *}
 * @description Create a new Array/Object by omitting the requested values
 * @param  {Array} key The key(s) in which to omit from the data
 * @param  {Object} x The object to search through and filter
 * @return {Object} Returns the newly created data without the omitted values
 *
 * @example
 * const obj = omit('test', { test: '3432', thing: 123 }); // => { thing: 123 }
 * const arr = omit(['a', 'b'], { a: 1, b: 2, c: 3}); // => { c: 3 }
 *
 * // omit is curried
 *
 * const omitKeys = omit('test');
 *
 * omitKeys({ test: '3432', thing: 123 }); // => { thing: 123 }
 */
const omit = (key, x) => {
  const keyArr = ensureArray(key)

  return Object.keys(x).reduce((acc, prop) => {
    if (keyArr.indexOf(prop) === -1) {
      acc[prop] = x[prop]
    }

    return acc
  }, {})
}

export default curry(omit)
