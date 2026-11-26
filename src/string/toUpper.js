/** @private @type {(a: string) => string} */
const toUpper = a => a.toUpperCase()

/**
 * @name toUpper
 * @function
 * @since v0.7.0
 * @category String
 * @sig String -> String
 * @description Transform a provided string into an uppercase version
 * @param {String} a The string to upper case
 * @return {String} The string in upper case format
 * @example
 * import { toUpper } from 'kyanite'
 *
 * toUpper('hi') // => 'HI'
 * toUpper('test.123.hello') // => 'TEST.123.HELLO'
 */
export default /** @type {{
  (a: string): string
}} */ (toUpper)
