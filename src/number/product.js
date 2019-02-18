import reduce from '../function/reduce'
import multiply from './multiply'

/**
 * @name product
 * @since v0.11.3
 * @function
 * @category Number
 * @sig Array -> Number
 * @description Takes an Array of numbers and multiplies all of them together
 * @param {Array} arr The array of numbers to combine
 * @return {Number} The product of the numbers
 *
 * @example
 * import { product } from 'kyanite'
 *
 * product([1, 2, 3]) // => 6
 * product([2, 3, 0]) // => 0
 */
const product = reduce(multiply, 1)

export default product
