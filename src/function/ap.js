import _curry3 from '../_internals/_curry3'

/**
 * @name ap
 * @function
 * @since v0.4.0
 * @category Function
 * @sig (a -> b -> c) -> (a -> b) -> a -> c
 * @description
 * Takes a setter and getter function to transform provided data also known as the S combinator
 * @param {Function} fn The setter function for ap x => y => z
 * @param {Function} gn The getter function for ap x => y
 * @param {Any} x The data that is given to the provided functions
 * @return {Any} The results of running the S combinator functions
 * @example
 * import { ap } from 'kyanite'
 *
 * const state = {
 *   a: {
 *     b: 2
 *   }
 * }
 *
 * ap(s => doubleB => ({
 *   ...s,
 *   a: { b: doubleB }
 * }), s => s.a.b * 2, state) // => { a: { b: 4 } }
 *
 * // It's also curried
 *
 * const fn = ap(x => y => x + y, z => z * 2)
 *
 * fn(2) // => 6
 * fn(3) // => 9
 */
const ap = (fn, gn, x) => fn(x)(gn(x))

export default _curry3(ap)
