/** @private @type {(x: number) => boolean} */
const isOdd = n => {
  // Negative odd numbers leave -1, decimals and NaN leave something else
  const r = n % 2

  return r === 1 || r === -1
}

/**
 * @name isOdd
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
export default /** @type {{
  (x: number): boolean
}} */ (isOdd)
