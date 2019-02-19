import _curry2 from '../_internals/_curry2'
import reduce from './reduce'

/**
 * @name pipeP
 * @function
 * @since v0.10.0
 * @category Function
 * @sig [(a -> Promise b), (b -> Promise c), ..., (y -> Promise z)] -> a -> (a -> Promise z)
 * @description Runs a pipe of promise based functions against data
 * @param {Array} fns The list of async functions to run
 * @param {Any} data The data to apply our functions to
 * @return {Promise} A promise that once fulfilled has the results from the pipe
 * @example
 * import { pipeP } from 'kyanite'
 *
 * const foo = a => new Promise(resolve => resolve(a + '123'))
 * const bar = a => new Promise(resolve => resolve(a + '555'))
 *
 * pipeP([foo, bar], '0').then(console.log) // => '0123555'
 *
 * // It's also curried
 * const fn = pipeP([foo, bar])
 *
 * fn('0').then(console.log) // => '0123555'
 * fn('10').then(console.log) // => '10123555'
 *
 */
const pipeP = (fns, data) =>
  reduce((f, acc) =>
    acc.then(f), Promise.resolve(data), fns)

export default _curry2(pipeP)
