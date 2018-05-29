import curry from './curry'

/**
 * @name add
 * @since v2.0.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Adds the provided items together
 * @param {Number} a The first number to add
 * @param {Number} b The second number to add
 * @return {Number} The sum of the numbers
 *
 * @example
 * add(1, 2); // => 3
 *
 * // It's also curried
 *
 * const adder = add(2);
 *
 * adder(3); // => 5
 * adder(2); // => 4
 */
const add = (a, b) => a + b

export default curry(add)
