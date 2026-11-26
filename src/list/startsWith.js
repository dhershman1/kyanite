import _curry2 from '../_internals/_curry2.js'
import _matchesAt from '../_internals/_matchesAt.js'

/** @private @type {(a: ReadonlyArray<any> | string, list: ReadonlyArray<any> | string) => boolean} */
const startsWith = (a, list) => typeof list === 'string'
  ? list.startsWith(/** @type {string} */ (a))
  : _matchesAt(a, list, 0)

/**
 * @name startsWith
 * @function
 * @since v0.14.0
 * @category List
 * @sig
 * a -> List -> Boolean
 * String -> String -> Boolean
 * @description Checks to see if the provided value is at the beginning of a given list
 * Strings are checked like `String.prototype.startsWith`, arrays have each item compared with SameValueZero (like `includes`), so objects only match if they're the same object
 * @param {String|Array} a The value to check for at the beginning of the list
 * @param {String|Array} list The list to check through
 * @return {Boolean} If the value is at the beginning of the provided list
 * @example
 * import { startsWith } from 'kyanite'
 *
 * startsWith('c' , 'cab') // => true
 * startsWith(['c'], ['c', 'b', 'a']) // => true
 * startsWith('b', 'abc') // => false
 * startsWith(['b'], ['a', 'b', 'c']) // => false
 * startsWith('', 'abc') // => true
 *
 * // It's also curried
 * const fn = startsWith('c')
 *
 * fn('cab') // => true
 * fn('abc') // => false
 */
export default /** @type {{
  (a: string): (list: string) => boolean
  <T>(a: ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean
  (a: string, list: string): boolean
  <T>(a: ReadonlyArray<T>, list: ReadonlyArray<T>): boolean
}} */ (_curry2(startsWith))
