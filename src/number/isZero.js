import eq from '../function/eq'

/**
 * @name isZero
 * @function
 * @since v0.11.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is equal to the number zero or not
 * @param {Number} n The number to check compare
 * @return {Boolean} Whether or not the provided number was equal to zero
 * @example
 * import { isZero } from 'kyanite'
 *
 * isZero(1) // => false
 * isZero('0') // => false
 * isZero(0) // => true
 */
const isZero = eq(0)

export default isZero
