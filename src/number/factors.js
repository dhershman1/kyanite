import _appendǃ from '../_internals/_appendǃ'

/**
 * @name factors
 * @function
 * @since v0.8.3
 * @category Number
 * @sig Number -> Array
 * @description Takes a number and builds an array of factors for that number
 * @param {Number} x The number it should find the factors of
 * @return {Array} A new array which will contain the valid factors of the given number
 * @example
 * import { factors } from 'kyanite'
 *
 * factors(36) // => [1, 2, 3, 4, 6, 9, 12, 18, 36]
 * factors(-36) // => [1, 2, 3, 4, 6, 9, 12, 18, 36]
 * factors(102) // => [1, 2, 3, 6, 17, 34, 51, 102]
 * factors(-102) // => [1, 2, 3, 6, 17, 34, 51, 102]
 * factors() // => []
 * factors(0) // => []
 * factors(NaN) // => []
 *
 * // You can convert the array to negatives with map and negate
 * // (Imagining this is a brand new .js file)
 * import { compose, factors, map, negate } from 'kyanite'
 * map(negate, factors(-36)) // => [-1, -2, -3, -4, -6, -9, -12, -18, -36]
 * // Or even cleaner approach:
 * const negativeFactors = compose(map(negate), factors)
 *
 * negativeFactors(-36) // => [-1, -2, -3, -4, -6, -9, -12, -18, -36]
 * negativeFactors(36) // => [-1, -2, -3, -4, -6, -9, -12, -18, -36]
 */

const factors = (x = 0) => {
  const factors = []
  let quotient = 0

  for (let i = 1; i <= x; i++) {
    quotient = x / i

    if (quotient === Math.floor(quotient)) {
      _appendǃ(factors, i)
    }
  }

  return factors
}

export default factors
