/**
 * @name strip
 * @since v0.2.1
 * @category String
 * @sig String a -> String a
 * @description
 * Accepts a string value and removes all whitespace from it
 * @param {String} a The string to strip down
 * @return {String} The stripped string
 * @example
 * strip('I am squished') // => 'Iamsquished'
 */
const strip = a => a.replace(/\s/g, '')

export default strip
