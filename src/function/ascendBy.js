import _curry3 from '../_internals/_curry3.js'
import ascend from './ascend.js'

/** @private @type {<T = any>(fn: (obj: T) => any, a: T, b: T) => number} */
const ascendBy = (fn, a, b) => ascend(fn(a), fn(b))

/**
 * @name ascendBy
 * @function
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
 * import { ascendBy } from 'kyanite'
 *
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
export default /** @type {{
  <T = any>(fn: (obj: T) => any): {
    (a: T): (b: T) => number
    (a: T, b: T): number
  }
  <T = any>(fn: (obj: T) => any, a: T): (b: T) => number
  <T = any>(fn: (obj: T) => any, a: T, b: T): number
}} */ (_curry3(ascendBy))
