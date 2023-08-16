import _curry2 from '../_internals/_curry2.js'

/**
 * @name xor
 * @function
 * @since v1.3.0
 * @category Function
 * @sig a -> b -> Boolean
 * @description
 * Exclusive or logical operation, returns true if one of the arguments is truthy and the other is falsy, otherwise it returns false
 * @param {Any} a The first value to check for a truthy value
 * @param {Any} b The second value to check for a truthy value
 * @return {Boolean} The boolean outcome of the check
 *
 * @example
 * import { xor } from 'kyanite'
 *
 * xor(true, true) // => false
 * xor(true, false) // => true
 * xor(false, true) // => true
 * xor(false, false) // => false
 */
const xor = (a, b) => Boolean(!a ^ !b)

export default _curry2(xor)
