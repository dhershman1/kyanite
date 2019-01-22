import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'
import reduce from '../function/reduce'

/**
 * @name sift
 * @function
 * @since v0.1.0
 * @category Object
 * @sig (a -> Boolean) -> Object -> Object
 * @description Works a lot like an array filter, but for the object data type
 * Accepts a function and an object, it then runs the function against each value
 * @param {Function} fn A function to run against the values within the object
 * @param {Object} obj The object to sift through
 * @return {Object} A new filtered out object
 *
 * @example
 * import { sift } from 'kyanite'
 *
 * sift(x => typeof x === 'string', {
 *   id: 44,
 *   thing: 'test',
 *   other: 'cool'
 * }) // => { thing: 'test', other: 'cool' }
 *
 * // It's also curried
 *
 * const sifter = sift(x => typeof x === 'string')
 *
 * sifter({ id: 44, thing: 'test', other: 'cool' }) // => { thing: 'test', other: 'cool' }
 */
const sift = (fn, obj) => reduce((k, acc) =>
  fn(obj[k]) ? _assocǃ(acc, k, obj[k]) : acc, {}, Object.keys(obj))

export default _curry2(sift)
