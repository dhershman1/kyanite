import _curry2 from '../_internals/_curry2'

/**
 * @name join
 * @function
 * @since v0.4.0
 * @category Array
 * @sig String a -> Array String
 * @description
 * Joins together an array of strings with whatever string was passed in
 * @param {String} str The string we want to use for the join
 * @param {Array} list The array to join
 * @return {String} The joined string
 * @example
 * import { join } from 'kyanite'
 *
 * join(' ', ['test', 'this', 'thing']) // => 'test this thing'
 * join('aaa', ['test', 'that', 'thing']) // => 'testaaathataaathing'
 *
 * // It's also curried
 * const j = join(' ')
 *
 * j(['test', 'this', 'thing']) // => 'test this thing'
 * j(['test', 'that', 'thing']) // => 'test that thing'
 */
const join = (str, list) => list.join(str)

export default _curry2(join)
