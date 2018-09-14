import curry from './curry'
import isNil from './isNil'

/**
 * @name is
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> a -> Boolean
 * @description
 * See if an object is an instance of the supplied constructor, this will also check up the inheritence chain
 * @param {Object} Ctor A Constructor
 * @param {*} x The value to test
 * @return {Boolean}
 *
 * @example
 * is(Object, {}) // => true
 * is(Array, []) // => true
 * is(String, '') // => true
 * is(Number, 0) // => true
 * is(Boolean, true) // => true
 * is(Function, a => a) // => true
 * is(RegExp, /[0-9]/g) // => true
 *
 * // It is curried as well
 *
 * const isObject = is(Object)
 *
 * isObject({}) // => true
 *
 * // Since almost everything in JS can also be related to an object you will get:
 * const isObj = is(Object)
 *
 * isObj({}) // => true
 * isObj([]) // => true
 * isObj(function () { }) // => true
 * isObj(new Boolean(true)) // => true
 * isObj(new Number(0)) // => true
 * isObj(/(?:)/) // => true
 * isObj(1) // => false
 * isObj('') // => false
 * isObj(false) // => false
 */
const is = (Ctor, x) => (!isNil(x) && x.constructor === Ctor) || x instanceof Ctor

export default curry(is)
