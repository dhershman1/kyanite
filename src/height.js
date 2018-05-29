
/**
 * @name height
 * @since v3.0.0
 * @category Object
 * @sig Object -> Number
 * @description Works a lot like length for arrays, but allows you to get the length of an object
 * @param {Object} obj The object we want to read the length of
 * @return {Number} The length of the object
 * @example
 * height({ a: 1, b: 2 }) // => 2
 */
const height = obj => Object.keys(obj).length

export default height
