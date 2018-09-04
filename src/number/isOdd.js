
/**
 * @name isOdd
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is odd or not
 * @param {Number} n The number to check against
 * @return {Boolean} Whether or not the number is odd
 * @example
 * isOdd(2) // => false
 * isOdd(NaN) // => false
 * isOdd(1) // => true
 * isOdd(3) // => true
 */
const isOdd = n => !isNaN(n) && n % 2 !== 0

export default isOdd
