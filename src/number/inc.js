/**
 * @name inc
 * @since v0.11.0
 * @function
 * @category Number
 * @sig Number -> Number
 * @description Takes in a number and returns it incremented by 1
 * @param {Number} n The number to increment
 * @return {Number} The incremented number
 * @example
 * import { inc } from 'kyanite'
 *
 * inc(1) // => 2
 * inc(inc(1)) // => 3
 */
const inc = n => n + 1

export default inc
