import rem from './rem'

/**
 * @name prime
 * @alias isPrime
 * @function
 * @since v0.8.3
 * @category Number
 * @sig Number -> Boolean
 * @description Determines if the number passed in is a prime number or not
 * @param {Number} x The number to check if its prime or not
 * @return {Boolean} A boolean based on if the number is prime
 * @example
 * import { prime } from 'kyanite'
 *
 * prime(5) // => true
 * prime(5009) // => true
 * prime(6) // => false
 * prime(5010) // => false
 */
const prime = x => {
  const s = Math.sqrt(x)
  let i = 2

  for (i; i <= s; i++) {
    if (!rem(i, x)) {
      return false
    }
  }

  return x && x !== 1
}

export default prime
