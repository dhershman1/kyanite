
/**
 * @name trim
 * @since v2.0.0
 * @category String
 * @sig String a -> String a
 * @description
 * Accepts a string value and trims it's white space
 * @param {String} str The string to trim
 * @return {String} The trimmed string
 * @example
 * trim('my new cow   '); // => 'my new cow'
 * trim('   new things   '); // => 'new things'
 */
const trim = str => str.trim()

export default trim
