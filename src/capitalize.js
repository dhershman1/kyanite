/**
 * @name capitalize
 * @since v2.0.0
 * @category String
 * @sig String -> String
 * @description Capitalizes the first letter of a string
 * @param {String} str The string we want to capitalize
 * @return {String} The capitalized string
 *
 * @example
 *
 * capitalize('test'); // => 'Test'
 * capitalize('small brown cow'); // => 'Small brown cow'
 */
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default capitalize
