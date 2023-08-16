import compose from '../function/compose.js'
import _curry2 from '../_internals/_curry2.js'
import deepEq from '../function/deepEq.js'
import slice from './slice.js'

/**
 * @name startsWith
 * @function
 * @since v0.14.0
 * @category List
 * @sig
 * a -> List -> Boolean
 * String -> String -> Boolean
 * @description Checks to see if the provided value is at the beginning of a given list
 * @param {String|Array} a The value to check for at the beginning of the list
 * @param {String|Array} list The list to check through
 * @return {Boolean} If the value is at the end of the provided list
 * @example
 * import { startsWith } from 'kyanite'
 *
 * startsWith('c' , 'cab') // => true
 * startsWith(['c'], ['c', 'b', 'a']) // => true
 * startsWith('b', 'abc') // => false
 * startsWith(['b'], ['a', 'b', 'c']) // => false
 *
 * // It's also curried
 * const fn = startsWith('c')
 *
 * fn('cab') // => true
 * fn('abc') // => false
 */
const startsWith = (a, list) => compose(deepEq(a), slice(0, a.length), list)

export default _curry2(startsWith)
