import _curry2 from '../_internals/_curry2'
import _equal from '../_internals/_equal'

/**
 * @name deepEq
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> Boolean
 * @description Takes and compares two items. Capable of handling cyclical data structures
 * @param {Any} a First item to compare
 * @param {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 *
 * @example
 * const q = { a: 1 }
 *
 * deepEq({ a: 1 }, { a: 1 }) // => true
 * deepEq({ a: 1, b: 2 }, { b: 2, a: 1 }) // => true
 * deepEq(/[A-Z]/, new RegExp('[A-Z]') // => true
 * deepEq([1, 2], [1, 2]) // => true
 * deepEq(new Date(), new Date()) // => true
 * deepEq({ a: { q } }, { a: { q } }) // => true
 * deepEq('test', new String('test')) // => true
 * deepEq(false, new Boolean(false)) // => true
 * deepEq(5, new Number(5)) // => true
 *
 * deepEq([1, 2], [2, 1]) // => false
 * deepEq({ a: 1 }, { b: 1 }) // => false
 * deepEq(new Date('11/14/1992'), new Date('11/14/2018')) // => false
 * deepEq([], {}) // => false
 */
const deepEq = (a, b) => _equal(a, b, [], [])

export default _curry2(deepEq)
