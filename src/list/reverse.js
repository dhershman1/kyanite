/** @private @type {(list: ReadonlyArray<any> | string) => any[] | string} */
const reverse = list =>
  Array.isArray(list) ? list.slice().reverse() : /** @type {string} */ (list).split('').reverse().join('')

/**
 * @name reverse
 * @function
 * @since v0.1.0
 * @category List
 * @sig
 * Array -> Array
 * String -> String
 * @description Accepts a list of values or characters and reverses it
 * @param {Array|String} list The list to reverse
 * @return {Array|String} A new reversed list
 * @example
 * import { reverse } from 'kyanite'
 *
 * reverse([1, 2, 3]) // => [3, 2, 1]
 * reverse([]) // => []
 * reverse('abc') // => 'cba'
 */
export default /** @type {{
  <T = any>(list: ReadonlyArray<T>): T[]
  (str: string): string
}} */ (reverse)
