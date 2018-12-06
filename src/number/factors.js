import compose from '../function/compose'
import filter from '../array/filter'
import range from './range'
import rem from './rem'

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
 * factors(36) // => [ 1, 2, 3, 6, 17, 34, 51 ]
 * factors(102) // => [1, 2, 3, 6, 17, 34, 51]
 * factors(0) // => []
 * factors(-1) // => []
 * factors(NaN) // => []
 */
const factors = (x = 0) => compose(filter(i => rem(i, x) === 0), range(0), x)

export default factors
