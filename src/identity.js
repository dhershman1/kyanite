
/**
 * @name identity
 * @since v2.0.0
 * @category Function
 * @sig a -> a
 * @description A function that returns the value passed to it
 * @param {Any} a The value to return
 * @return {Any} The value
 *
 * @example
 * identity(10); // => 10
 *
 * const test = identity(10);
 *
 * console.log(typeof test.constructor); // => 'function'
 * console.log(10.constructor); // => error
 *
 * filter(identity, [0, 'cool', null, 1]); // => ['cool', 1]
 */
const identity = a => a

export default identity
