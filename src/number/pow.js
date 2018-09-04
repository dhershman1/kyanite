import curry from '../function/curry'

/**
 * @name pow
 * @since v0.7.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Take a base number and brings it to the value of base^exponent
 * @param {Number} a The exponent used to raise the base number
 * @param {Number} b The base Number
 * @return {Number} A number representing the given base taken to the power of the given exponent
 * @example
 * pow(3, 7) // => 343
 * pow(0.5, 4) // => 2
 *
 * // It's also curried
 * const p = pow(3)
 *
 * p(7) // => 343
 */
const pow = (a, b) => b ** a

export default curry(pow)
