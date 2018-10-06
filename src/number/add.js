import curryN from '../function/curryN'

/**
 * @name add
 * @since v0.1.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Adds the provided numbers together
 * @param {...Number} nums The numbers to add together
 * @return {Number} The sum of the numbers
 *
 * @example
 * add(1, 2) // => 3
 *
 * // It's also curried
 *
 * const adder = add(2)
 *
 * adder(3) // => 5
 * adder(2) // => 4
 */
const add = (...nums) => nums.reduce((total, x) => total + Number(x), 0)

export default curryN(2, add)
