
/**
 * @name identity
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @description A function that returns the value passed to it, also known as the I combinator
 * @param {Any} a The value to identify
 * @return {Any} The identified value
 * @example
 * import { identity } from 'kyanite'
 *
 * identity(10) // => 10
 *
 * [0, 'cool', null, 1].filter(identity) // => ['cool', 1]
 */
const identity = a => a

export default identity
