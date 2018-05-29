import curry from './curry'

/**
 * @name prop
 * @since v0.6.0
 * @category Object
 * @sig k -> {k: v} -> v | Undefined
 * @description
 * Brings back the indicated property of an object if it exists
 * @param {Array} p The array path of the property we are looking for
 * @param {Object} obj The object to search through
 * @return {Any} The value that exists at 'obj.p'
 *
 * @example
 * prop('thing', { thing: 'test' }); // => 'test'
 * prop('thing', {}); // => undefined
 * map(prop('a'), [{ a: 1 }, { a: 2 }, { a: 3 }]); // => [1, 2, 3]
 *
 * // It is also curried
 *
 * const proper = prop('a');
 *
 * proper({ a: 1, b: 2 }); // => 1
 */
const prop = (p, obj) => obj[p]

export default curry(prop)
