/**
 * @name dec
 * @since v0.11.0
 * @function
 * @category Number
 * @sig Number -> Number
 * @description Takes in a number and returns it decremented by 1
 * @param {Number} n The number to decrement
 * @return {Number} The decremented number
 * @example
 * import { dec } from 'kyanite'
 *
 * dec(1) // => 0
 * dec(dec(3)) // => 1
 */
const dec = n => n - 1

export default dec
