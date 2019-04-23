import _curry2 from '../_internals/_curry2'

/**
 * @name and
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> a | b
 * @description
 * Runs an and comparison on the two values passed in
 * @param {Any} a The first value to compare
 * @param {Any} b The second value to compare
 * @return {Any} The evaluated outcome of the parameters
 *
 * @example
 * import { and } from 'kyanite'
 *
 * and(true, true) // => true
 * and(true, false) // => false
 * and(false, false) // => false
 */
const and = (a, b) => a && b

export default _curry2(and)
