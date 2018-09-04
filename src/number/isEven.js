/**
 * @name isEven
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is even or not
 * @param {Number} n The number to check if its even
 * @return {Boolean} Whether or not the provided number is even
 * @example
 * isEven(2) // => true
 * isEven(12) // => true
 * isEven(1) // => false
 * isEven(NaN) // => false
 */
const isEven = n => !isNaN(n) && n % 2 === 0

export default isEven
