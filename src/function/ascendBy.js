import curry from './curry'
import ascend from './ascend'

/**
 * @name ascendBy
 * @since v0.2.1
 * @category Function
 * @sig Function -> Any -> Any -> Number
 * @description Can be used with sort to ascend an array based on the function passed in
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
 * ].sort(ascendBy(x => x.name)) // => [{ name: 'amanda' }, { name: 'amanda' }, { name: 'bob' }, { name: 'carl' }]
 *
 * // It's also curried
 *
 * const desc = ascendBy(x => x.name)
 *
 * [
 *  { name: 'bob' },
 *  { name: 'amanda' },
 *  { name: 'carl' },
 *  { name: 'amanda' }
 * ].sort(desc) // => [{ name: 'amanda' }, { name: 'amanda' }, { name: 'bob' }, { name: 'carl' }]
 */
const ascendBy = (fn, a, b) => ascend(fn(a), fn(b))

export default curry(ascendBy)
