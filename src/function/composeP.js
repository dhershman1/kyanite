import _curry3 from '../_internals/_curry3'

/**
 * @name composeP
 * @function
 * @since v0.10.0
 * @category Function
 * @sig (a -> Promise b) -> (b -> Promise c) -> a -> (a -> Promise c)
 * @description Applies async functions that return a promise from right to left
 * @param {Function} fn The second async function to apply
 * @param {Function} gn The first async function to apply
 * @param {Any} a The data to apply the functions to
 * @return {Promise} Based on the functions given the result of the functional composition
 * @example
 * import { composeP } from 'kyanite'
 *
 * const foo = a => new Promise(resolve => resolve(a + '123'))
 * const bar = a => new Promise(resolve => resolve(a + '555'))
 *
 * compose(bar, foo, '100').then(console.log) // => '100123555'
 *
 * // It's also curried
 * const fn = compose(bar, foo)
 *
 * fn('100').then(console.log) // => '100123555'
 *
 */
const composeP = (fn, gn, a) =>
  gn(a).then(fn)

export default _curry3(composeP)
