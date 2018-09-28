import curry from './curry'

/**
 * @name always
 * @since v0.9.0
 * @category Function
 * @sig a -> b -> a
 * @description
 * Always returns the first param sent to it, and ignores the 2nd
 * @param {Any} a The value we want to return
 * @param {Any} _ The ignored parameter
 * @return {Any} The first parameter passed in
 * @example
 * always(false, true) // => false
 * always(true, true) // => true
 * pipe([
 *   branch(always(isEmpty([])), concat(1), identity)
 *   length
 * ], []) // => 1
 */
const always = (a, _) => a

export default curry(always)
