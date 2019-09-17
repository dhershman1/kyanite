import _curry2 from '../_internals/_curry2'

/**
 * @name applyN
 * @function
 * @since v1.0.0
 * @category Function
 * @sig (a -> b) -> Array [a] -> b
 * @description Applies a function to a parameter/argument. Useful for creating a fixed-arity function, also known as the A combinator
 * @param {Function} fn The function we want to apply to the data
 * @param {Array} a The parameter(s) to call the function with
 * @return {Any} The result of whatever fn(...a) will be
 * @example
 * import { applyN } from 'kyanite'
 *
 * applyN(x => x * 2, [2]) // => 4
 * applyN((a, b, c) => a + b + c, [1, 2, 3]) // => 6
 * applyN(Math.max, [1, 2, 3, -99, 42, 6, 7]) // => 42
 *
 * // It's also curried
 * const fn = applyN(x => x * 2)
 *
 * fn([2]) // => 4
 * fn([100]) // => 200
 */

const applyN = (fn, a) => fn(...a)

export default _curry2(applyN)
