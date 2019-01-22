import compose from '../function/compose'
import length from '../list/length'

/**
 * @name height
 * @function
 * @since v0.1.0
 * @category Object
 * @sig Object -> Number
 * @description Works a lot like length for arrays, but allows you to get the length of an object
 * @param {Object} obj The object we want to read the length of
 * @return {Number} The length of the object
 * @example
 * import { height } from 'kyanite'
 *
 * height({ a: 1, b: 2 }) // => 2
 */
const height = compose(length, Object.values)

export default height
