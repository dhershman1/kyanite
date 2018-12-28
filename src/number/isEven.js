import even from './even'

/**
 * @name isEven
 * @deprecated since v0.11.0 use even
 * @see even
 * @function
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is even or not
 * @param {Number} n The number to check if its even
 * @return {Boolean} Whether or not the provided number is even
 * @example
 * import { isEven } from 'kyanite'
 *
 * isEven(2) // => true
 * isEven(12) // => true
 * isEven('h') // => false
 * isEven(1) // => false
 * isEven(NaN) // => false
 */
const isEven = even

export default isEven
