/** @private @type {(str: string) => string} */
const trim = str => str.trim()

/**
 * @name trim
 * @function
 * @since v0.1.0
 * @category String
 * @sig String a -> String a
 * @description
 * Accepts a string value and trims it's white space
 * @param {String} str The string to trim
 * @return {String} The trimmed string
 * @example
 * import { trim } from 'kyanite'
 *
 * trim('my new cow   ') // => 'my new cow'
 * trim('   new things   ') // => 'new things'
 */
export default /** @type {{
  (str: string): string
}} */ (trim)
