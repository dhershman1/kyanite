import curry from './curry'
import descend from './descend'

/**
 * @name descendBy
 * @since v0.2.1
 * @category Function
 * @sig Function -> Any -> Any -> Number
 * @description Can be used with sort to descend an array based on the function passed in
 * @param {Function} fn The function to use on values within our array
 * @param {Any} a The first value to compare
 * @param {Any} b The second value to compare
 * @return {Number} A number based on where it falls when compared with the other value
 *
 * @example
 * [
 *  { name: 'bob' },
 *  { name: 'amanda' },
 *  { name: 'carl' },
 *  { name: 'amanda' }
 * ].sort(descendBy(x => x.name)) // => [{ name: 'carl' }, { name: 'bob' }, { name: 'amanda' }, { name: 'amanda' }]
 *
 * // It's also curried
 *
 * const desc = descendBy(x => x.name)
 *
 * [
 *  { name: 'bob' },
 *  { name: 'amanda' },
 *  { name: 'carl' },
 *  { name: 'amanda' }
 * ].sort(desc) // => [{ name: 'carl' }, { name: 'bob' }, { name: 'amanda' }, { name: 'amanda' }]
 */
const descendBy = (fn, a, b) => descend(fn(a), fn(b))

export default curry(descendBy)
