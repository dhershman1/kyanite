import curry from './curry'

/**
 * @name sub
 * @since v2.0.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Subtracts the provided items
 * @param {Number} a The number to subtract from
 * @param {Number} b The number to subtract with
 * @return {Number} The difference of the numbers
 *
 * @example
 * sub(2, 1); // => 1
 *
 * // It's also curried
 *
 * const subtract = sub(5);
 *
 * subtract(3); // => 2
 * subtract(2); // => 3
 */
const sub = (a, b) => a - b

export default curry(sub)
