import _curry2 from '../_internals/_curry2'

/**
 * @name always
 * @function
 * @since v0.9.0
 * @category Function
 * @sig a -> b -> a
 * @description
 * Always returns the first param sent to it, and ignores the 2nd also known as the K combinator
 * @param {Any} a The value we want to return
 * @param {Any} _ The ignored parameter
 * @return {Any} The first parameter passed in
 * @example
 * import { always } from 'kyanite'
 *
 * always(false, true) // => false
 * always(true, true) // => true
 * always('dino', 'saur') // => 'dino'
 *
 * // It's also curried
 * const fn = always('dino')
 *
 * fn('') // => 'dino'
 */
const always = (a, _) => a

export default _curry2(always)
