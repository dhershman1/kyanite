import curry from './curry'
import isNil from './isNil'

// To keep checks strict we sadly have to use this
/* eslint-disable no-undefined */

/**
 * @name is
 * @since v0.5.0
 * @category Function
 * @sig (* -> {*}) -> a -> Boolean
 * @description
 * See if an object is an instance of the supplied constructor, this will also check up the inheritence chain
 * @param {Object} Ctor A Constructor
 * @param {*} x The value to test
 * @return {Boolean}
 *
 * @example
 * is(Object, {}); // => true
 * is(Array, []); // => true
 * is(String, ''); // => true
 * is(Number, 0); // => true
 * is(Boolean, true); // => true
 * is(Function, a => a); // => true
 * is(RegExp, /[0-9]/g); // => true
 *
 * // It is curried as well
 *
 * const isObject = is(Object);
 *
 * isObject({}); // => true
 *
 * // Gotchas
 * // Since it is a light check you need to watch how you run into sitatuions like this
 * is(Object, {}); // => true
 * is(Object, []); // => true
 */
const is = (Ctor, x) => (!isNil(x) && x.constructor === Ctor) || x instanceof Ctor

export default curry(is)
