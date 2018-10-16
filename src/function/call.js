import _curry2 from '../_internals/_curry2'

/**
 * @name call
 * @since v0.10.0
 * @category Function
 * @sig (a -> b) -> a -> b
 * @description Calls the provided function with the given value
 * @param {Function} fn The function to call
 * @param {Any} a The value to pass along to the function
 * @return {Any} Whatever the provided function gives back
 * @example
 * call(x => x * 2, 2) // => 4
 *
 * // It's also curried
 * const fn = call(x => x * 2)
 *
 * fn(2) // => 4
 * fn(4) // => 8
 * fn(100) // => 200
 */
const call = (fn, a) => fn(a)

export default _curry2(call)
