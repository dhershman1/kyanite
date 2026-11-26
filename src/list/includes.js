import _curry2 from '../_internals/_curry2.js'

/** @private @type {(value: any, list: ReadonlyArray<any> | string) => boolean} */
const includes = (value, list) =>
  list.indexOf(value) !== -1

/**
 * @name includes
 * @function
 * @since v0.1.0
 * @category List
 * @sig
 * String | Number -> Array -> Boolean
 * String -> String -> Boolean
 * @description
 * Checks to see if the provided list contains at least 1 of the provided value within it
 * @param {Any} value The value we want to search the list for
 * @param {Array|String} list The list of items or characters we want to search through
 * @return {Boolean} A Boolean based on if the value is found or not
 * @example
 * import { includes } from 'kyanite'
 *
 * includes(3, [1, 2, 3]) // => true
 * includes('yan', 'kyanite') // => true
 *
 * // It is also curried
 *
 * const checker = includes(3)
 *
 * checker([1, 2, 3]) // => true
 * checker('123') // => true
 */
export default /** @type {{
  (value: string): (list: string) => boolean
  <T = any>(a: T): (list: ReadonlyArray<T>) => boolean
  (value: string, list: string): boolean
  <T = any>(a: T, list: ReadonlyArray<T>): boolean
}} */ (_curry2(includes))
