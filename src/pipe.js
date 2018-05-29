import curry from './curry'

/**
 * @name pipe
 * @since v2.0.0
 * @category Function
 * @sig Array (a -> b) -> a -> b
 * @description Applies a sequence of transformations over a value.
 * @param {Array} list The array of functions to apply to our value
 * @param {Any} a The value to apply our functions too
 * @return {Any} The transformed value
 *
 * @example
 * pipe([add(2), mul(2)], 10); // => 24
 *
 * // It's also curried
 *
 * const piper = pipe([add(2), mul(2)]);
 *
 * piper(10); // => 24
 */
const pipe = (list, a) =>
  list.reduce((acc, fn) => fn(acc), a)

export default curry(pipe)
