import reduce from '../function/reduce'
import add from './add'

/**
 * @name sum
 * @since v0.11.3
 * @function
 * @category Number
 * @sig Array -> Number
 * @description Takes an Array of numbers and adds all of them together
 * @param {Array} arr The array of numbers to combine
 * @return {Number} The sum of the numbers
 *
 * @example
 * import { sum } from 'kyanite'
 *
 * sum([1, 2, 3]) // => 6
 * sum([1, 2, -3]) // => 0
 */
const sum = reduce(add, 0)

export default sum
