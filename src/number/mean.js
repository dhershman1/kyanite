import add from './add.js'
import divide from './divide.js'
import length from '../list/length.js'
import _reduce from '../_internals/_reduce.js'

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
const mean = x => divide(length(x), _reduce(add, 0, x))

export default mean
