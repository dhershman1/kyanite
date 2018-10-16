import _curry2 from '../_internals/_curry2'

/**
 * @name or
 * @since v0.1.0
 * @category Function
 * @sig Boolean -> Boolean -> Boolean
 * @description
 * Runs an or comparison on the two values passed in
 * @param {...Boolean} args The values to be used to make sure some of them are passing
 * @return {Boolean} The evaluated outcome of the parameters
 *
 * @example
 * or(true, true) // => true
 * or(true, false) // => true
 * or(false, false) // => false
 */
const or = (a, b) => a || b

export default _curry2(or)
