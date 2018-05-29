import curry from './curry'

/**
 * @name mul
 * @since v2.0.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Multiplies the provided items
 * @param {Number} a The first factor to multiply with
 * @param {Number} b The second factor to multiply with
 * @return {Number} The product of the numbers
 *
 * @example
 * mul(2, 1); // => 2
 *
 * // It's also curried
 *
 * const multiply = mul(5);
 *
 * multiply(3); // => 15
 * multiply(2); // => 10
 */
const mul = (a, b) => a * b

export default curry(mul)
