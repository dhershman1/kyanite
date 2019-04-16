import _curry2 from '../_internals/_curry2'
import complement from './complement'
import eq from './eq'

/**
 * @name notEq
 * @function
 * @since v0.12.2
 * @category Function
 * @sig * -> * -> Boolean
 * @description Takes in two values and checks to make sure they're not equal to each other
 * @param {Any} a The first value to compare
 * @param {Any} b The second value to compare
 * @return {Boolean} Whether or not the values provided are equal
 * @example
 * import { notEq } from 'kyanite'
 *
 * notEq(1, '1') // => true
 * notEq('test', 'Test') // => true
 * notEq(2, 2) // => false
 *
 * // It's also curried
 *
 * const fn = notEq(1)
 *
 * fn('1') // => true
 * fn(2) // => true
 * fn(1) // => false
 */
const notEq = (a, b) => complement(eq(a), b)

export default _curry2(notEq)
