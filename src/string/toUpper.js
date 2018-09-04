/**
 * @name toUpper
 * @since v0.7.0
 * @category String
 * @sig String -> String
 * @description Transform a provided string into an uppercase version
 * @param {String} a The string to upper case
 * @return {String} The string in upper case format
 * @example
 * toUpper('hi') // => 'HI'
 * toUpper('test.123.hello') // => 'TEST.123.HELLO'
 */
const toUpper = a => a.toUpperCase()

export default toUpper
