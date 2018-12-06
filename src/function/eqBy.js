import _curry3 from '../_internals/_curry3'
import eq from './eq'

/**
 * @name eqBy
 * @function
 * @since v0.10.0
 * @category Function
 * @sig (a -> b) -> a -> a -> Boolean
 * @description Gives back a result of comparing two values after applying a function over the values
 * @param {Function} fn The function to apply to both of the given values
 * @param {Any} a The first value to compare
 * @param {Any} b The second value to compare
 * @return {Boolean} The result of the value comparison
 * @example
 * import { eqBy } from 'kyanite'
 *
 * eqBy(Math.abs, 5, -5) // => true
 * eqBy(x => x[0], [1], [1]) // => true
 * eqBy(x => x.length, 'ab', 'abc') // => false
 *
 * // It's also curried
 *
 * const fn = eqBy(Math.abs)
 *
 * fn(5, -5) // => true
 * fn(5, -1) // => false
 */
const eqBy = (fn, a, b) =>
  eq(fn(a), fn(b))

export default _curry3(eqBy)
