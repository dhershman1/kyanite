import _curry2 from '../_internals/_curry2'

/**
 * @name or
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> a | b
 * @description
 * Runs an or comparison on the two values passed in
 * @param {Any} a The first value to check for a truthy value
 * @param {Any} b The second value to check for a truthy value
 * @return {Any} The value that returns truthy
 *
 * @example
 * import { or } from 'kyanite'
 *
 * or(true, true) // => true
 * or(true, false) // => true
 * or(false, false) // => false
 */
const or = (a, b) => a || b

export default _curry2(or)
