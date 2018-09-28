import curry from '../function/curry'

/**
 * @name split
 * @since v0.9.0
 * @category String
 * @sig String -> String -> Array
 * @description Takes a string and splits it into an array based on the character passed in
 * @param {String} char The character to split the string by
 * @param {String} str The string we want to split
 * @return {Array} A new array of characters from the string
 * @example
 * split('', 'abc') // => ['a', 'b', 'c']
 * split(':', '123:334') // => ['123', '334']
 *
 * const sp = split('')
 *
 * sp('abc') // => ['a', 'b', 'c']
 */
const split = (char, str) => str.split(char)

export default curry(split)
