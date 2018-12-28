import eq from '../function/eq'

/**
 * @name odd
 * @alias isOdd
 * @function
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is odd or not
 * @param {Number} n The number to check against
 * @return {Boolean} Whether or not the number is odd
 * @example
 * import { odd } from 'kyanite'
 *
 * odd(1) // => true
 * odd(3) // => true
 * odd('h') // => false
 * odd(2) // => false
 * odd(NaN) // => false
 */
const odd = n => {
  if (!eq(n, NaN)) {
    const _eq = eq(n % 2)

    return !_eq(NaN) && !_eq(0)
  }

  return false
}

export default odd
