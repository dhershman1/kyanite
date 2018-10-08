import curry from './curry'

/**
 * @name flip
 * @since v0.10.0
 * @category Function
 * @sig (a -> b -> c) -> b -> a -> c
 * @description Takes a function and two parameters and flips them when passing them to the given function
 * @param {Function} fn The function to give the parameters to
 * @param {Any} a The param to become the 2nd past into the function
 * @param {Any} b The param to become the 1st past into the function
 * @return {Any} The value returned by the passed in function
 * @example
 * flip((a, b) => b > a, 2, 1) // => true
 * flip((a, b) => b > a, 1, 2) // => false
 *
 * // It's also curried
 * const _gt = flip((a, b) => b > a)
 *
 * _gt(1, 2) // => false
 * _gt(2, 1) // => true
 */
const flip = (fn, a, b) => fn(b, a)

export default curry(flip)
