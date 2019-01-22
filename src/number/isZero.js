import eq from '../function/eq'

/**
 * @name zero
 * @function
 * @since v0.11.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is equal to the number zero or not
 * @param {Number} n The number to check compare
 * @return {Boolean} Whether or not the provided number was equal to zero
 * @example
 * import { zero } from 'kyanite'
 *
 * zero(1) // => false
 * zero('0') // => false
 * zero(0) // => true
 */
const zero = eq(0)

export default zero
