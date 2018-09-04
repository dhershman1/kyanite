/**
 * @name toLower
 * @since v0.7.0
 * @category String
 * @sig String -> String
 * @description Transform a provided string into an lowercase version
 * @param {String} a The string to lower case
 * @return {String} The string in lower case format
 * @example
 * toLower('HI') // => 'hi'
 * toLower('TEST.123.HELLO') // => 'test.123.hello'
 */
const toLower = a => a.toLowerCase()

export default toLower
