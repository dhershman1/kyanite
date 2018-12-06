import _curry3 from '../_internals/_curry3'

/**
 * @name clamp
 * @function
 * @since v0.10.0
 * @category Number
 * @sig Number -> Number -> Number -> Number
 * @description Restricts a number to be within a range
 * @param {Number} min The minimum of the clamp
 * @param {Number} max The maximum of the clamp
 * @param {Number} val The number to clamp
 * @return {Number} The value if its inbetween min and max, min if its below and max if its above
 * @example
 * import { clamp } from 'kyanite'
 *
 * clamp(1, 900, 23) // => 23
 * clamp(1, 900, 901) // => 900
 * clamp(1, 900, 0) // => 1
 *
 * const fn = clamp(1, 900)
 *
 * fn(23) // => 23
 * fn(901) // => 900
 * fn(0) // => 1
 */
const clamp = (min, max, val) => {
  if (min > max) {
    throw new Error('Min cannot be greater than max in clamp')
  }

  if (val > min && val < max) {
    return val
  }

  return val <= min ? min : max
}

export default _curry3(clamp)
