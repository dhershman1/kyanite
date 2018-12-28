import odd from './odd'

/**
 * @name isOdd
 * @deprecated since v0.11.0 use odd
 * @see odd
 * @function
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is odd or not
 * @param {Number} n The number to check against
 * @return {Boolean} Whether or not the number is odd
 * @example
 * import { isOdd } from 'kyanite'
 *
 * isOdd(1) // => true
 * isOdd(3) // => true
 * isOdd('h') // => false
 * isOdd(2) // => false
 * isOdd(NaN) // => false
 */
const isOdd = odd

export default isOdd
