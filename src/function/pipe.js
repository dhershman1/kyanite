import _curry2 from '../_internals/_curry2'

/**
 * @name pipe
 * @function
 * @since v0.1.0
 * @category Function
 * @sig Array (a -> b) -> a -> b
 * @description Applies a sequence of transformations over a value.
 * @param {Array} arr The array of functions to apply to our value
 * @param {Any} init The value to apply our functions too
 * @return {Any} The transformed value
 *
 * @example
 * pipe([add(2), multiply(2)], 10) // => 24
 *
 * // It's also curried
 *
 * const piper = pipe([add(2), multiply(2)])
 *
 * piper(10) // => 24
 */
const pipe = (arr, init) =>
  arr.reduce((acc, fn) => fn(acc), init)

export default _curry2(pipe)
