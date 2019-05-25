import _curry2 from '../_internals/_curry2'
import flip from '../function/flip'

/**
 * @name fold
 * @function
 * @since v0.13.0
 * @category Array
 * @sig (a -> acc -> b) -> [a] -> b
 * @description Takes an array and folds it using a function, basically a reduce without the need to send an initial accumulator value
 * @param  {Function} fn The function used/called during the fold
 * @param  {Array} arr The array we want to fold/reduce down
 * @return {Any} A value based on the results of the function
 *
 * @example
 * import { fold } from 'kyanite'
 *
 * fold((a, acc) => a <= acc ? a : acc, [5, 6, 3, 9, 1]) // => 1
 * fold((a, acc) => a + acc, [1, 2, 3, 4, 5]) // => 15
 *
 * // fold is also curried
 *
 * const fn = fold((a, acc) => a <= acc ? a : acc)
 *
 * fn([5, 4, 19, 20, 32, 1]) // => 1
 * fn(['z', 'x', 'd', 'p']) // => 'd'
 */
const fold = (fn, arr) => arr.reduce(flip(fn))

export default _curry2(fold)
