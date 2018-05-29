import curry from './curry'

/**
 * @name gcd
 * @since v2.0.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description
 * Determines the greatest common denominator of the numbers passed in
 * @param {Number} a The First number to use
 * @param {Number} b The Second number to use
 * @return {Number} The Greatest Common Denominator
 *
 * @example
 * gcd(80, 90); // => 10
 * gcd(20, 600); // => 20
 *
 * // It's also curried
 *
 * const a = gcd(80);
 *
 * a(90); // => 10
 * a(93); // => 1
*/
const gcd = (a, b) => {
  if (!b) {
    return a
  }

  return gcd(b, a % b)
}

export default curry(gcd)
