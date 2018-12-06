import _curry2 from '../_internals/_curry2'

/**
 * @name prop
 * @function
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> v | Undefined
 * @description
 * Brings back the indicated property of an object if it exists
 * @param {Array} p The array path of the property we are looking for
 * @param {Object} obj The object to search through
 * @return {Any} The value that exists at 'obj.p'
 *
 * @example
 * import { prop } from 'kyanite'
 *
 * prop('thing', { thing: 'test' }) // => 'test'
 * prop('thing', {}) // => undefined
 * map(prop('a'), [{ a: 1 }, { a: 2 }, { a: 3 }]) // => [1, 2, 3]
 *
 * // It is also curried
 *
 * const proper = prop('a')
 *
 * proper({ a: 1, b: 2 }) // => 1
 */
const prop = (p, obj) => obj[p]

export default _curry2(prop)
