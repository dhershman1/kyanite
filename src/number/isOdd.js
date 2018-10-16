import and from '../function/and'
import eq from '../function/eq'

const _eqOf = x => {
  const _eq = eq(x)

  return and(!_eq(NaN), !_eq(0))
}

/**
 * @name isOdd
 * @since v0.7.0
 * @category Number
 * @sig Number -> Boolean
 * @description Checks if the provided number is odd or not
 * @param {Number} n The number to check against
 * @return {Boolean} Whether or not the number is odd
 * @example
 * isOdd(1) // => true
 * isOdd(3) // => true
 * isOdd('h') // => false
 * isOdd(2) // => false
 * isOdd(NaN) // => false
 */
const isOdd = n => and(!eq(n, NaN), _eqOf(n % 2))

export default isOdd
