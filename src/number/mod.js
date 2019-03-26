import _curry2 from '../_internals/_curry2'
import some from '../array/some'
import identity from '../function/identity'

/**
 * @name mod
 * @function
 * @since v0.12.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Behaves like the modulo operator should mathematically, unlike the `%` operator. The arguments are required to be integers and will return NaN when the modulus is zero or negative.
 * @param {Number} a The dividend
 * @param {Number} b The modulus
 * @return {Number} The result of `b mod a`
 *
 * @example
 * import { mod } from 'kyanite'
 *
 * mod(17, 5) // => 2
 * mod(-17, 5) // => 3
 * mod(-5, 4) // => 3
 * mod(17, 0) // => NaN
 * mod(17, -5) // => NaN
 * mod(17.2, 5) // => NaN
 * mod(17, 5.3) // => NaN
 *
 * // It's also curried
 * const fn = mod(17)
 *
 * fn(5) // => 2
 * fn(-5) // => NaN
 * fn(0) // => NaN
 * fn(5.3) // => NaN
 */
const mod = (a, b) => {
  if (some(identity, [!Number.isInteger(a), !Number.isInteger(b), b < 1])) {
    return NaN
  }

  return ((a % b) + b) % b
}

export default _curry2(mod)
