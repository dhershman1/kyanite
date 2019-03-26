import reduce from '../function/reduce'

/**
 * @name max
 * @function
 * @since v0.1.0
 * @category Array
 * @sig [Number|String] -> Number|String
 * @description
 * Iterates through an array to find the max value
 * @param {Array} list The Array to iterate through
 * @return {Any} The found or "deemed" maximum value of the array
 *
 * @example
 * import { max } from 'kyanite'
 *
 * max([1, 3, 2, 5, 4]) // => 5
 * max(['c', 'a', 'b', 'f']) // => 'f'
 */
const max = reduce((a, b) => a >= b ? a : b, '')

export default max
