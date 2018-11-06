import _curry2 from '../_internals/_curry2'

/**
 * @name and
 * @since v0.1.0
 * @category Function
 * @sig Boolean -> Boolean -> Boolean
 * @description
 * Runs an and comparison on the two values passed in
 * @param {Boolean} a The first value to compare
 * @param {Boolean} b The second value to compare
 * @return {Boolean} The evaluated outcome of the parameters
 *
 * @example
 * and(true, true) // => true
 * and(true, false) // => false
 * and(false, false) // => false
 */
const and = (a, b) => a && b

export default _curry2(and)
