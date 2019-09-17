import rem from './rem'

/**
 * @name isPrime
 * @function
 * @since v0.8.3
 * @category Number
 * @sig Number -> Boolean
 * @description Determines if the number passed in is a prime number or not
 * @param {Number} x The number to check if its prime or not
 * @return {Boolean} A boolean based on if the number is prime
 * @example
 * import { isPrime } from 'kyanite'
 *
 * isPrime(5) // => true
 * isPrime(5009) // => true
 * isPrime(6) // => false
 * isPrime(5010) // => false
 */
const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (!rem(i, n)) {
      return false
    }
  }

  return n > 1
}

export default isPrime
