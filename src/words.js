import trim from './trim'

/**
 * @name words
 * @since v2.0.0
 * @category String
 * @sig String -> Array String
 * @description
 * Takes a string and breaks the words down into an array
 * @param {String} str The string we want to break down
 * @return {Array} The words broken down into an array of strings
 *
 * @example
 * words('my brown cow'); // => ['my', 'brown', 'cow']
 */
const words = str => trim(str).split(/\s+/)

export default words
