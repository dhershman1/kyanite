
/**
 * @name isOdd
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is odd or not
 * @param {Number} n The number to check against
 * @example
 * isOdd(2) // => false
 * isOdd(1) // => true
 * isOdd(3) // => true
 */
const isOdd = n => n % 2 !== 0

export default isOdd
