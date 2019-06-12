import compose from '../function/compose'
import _curry2 from '../_internals/_curry2'
import deepEq from '../function/deepEq'
import slice from './slice'

/**
 * @name endsWith
 * @function
 * @since v0.10.0
 * @category List
 * @sig
 * a -> List -> Boolean
 * String -> String -> Boolean
 * @description Checks to see if the provided value is at the end of a given list
 * @param {String|Array} a The value to check for at the end of the list
 * @param {String|Array} list The list to check through
 * @return {Boolean} If the value is at the end of the provided list
 * @example
 * import { endsWith } from 'kyanite'
 *
 * endsWith('c' , 'abc') // => true
 * endsWith(['c'], ['a', 'b', 'c']) // => true
 * endsWith('b', 'abc') // => false
 * endsWith(['b'], ['a', 'b', 'c']) // => false
 *
 * // It's also curried
 * const fn = endsWith('c')
 *
 * fn('abc') // => true
 * fn('cba') // => false
 */
const endsWith = (a, list) => compose(deepEq(a), slice(-a.length, Infinity), list)

export default _curry2(endsWith)
