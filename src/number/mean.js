import add from './add'
import divide from './divide'
import length from '../list/length'
import reduce from '../function/reduce'

/**
 * @name mean
 * @function
 * @since v0.1.0
 * @category Number
 * @sig [Number] -> Number
 * @description Gets the average from a given array of numbers
 * @param  {Array} x An array of numbers to add together
 * @return {Number} Returns the mean average of the numbers
 *
 * @example
 * import { mean } from 'kyanite'
 *
 * mean([1, 2, 3, 2]) // => 2
 * mean([2]) // => 2
 * mean([]) // => NaN
 * mean() // => Ref Error
 */
const mean = x => divide(length(x), reduce(add, 0, x))

export default mean
