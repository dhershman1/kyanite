import _curry2 from '../_internals/_curry2'
import _appendǃ from '../_internals/_appendǃ'

/**
 * @name multiples
 * @function
 * @since v1.0.0
 * @category Number
 * @sig Number -> Number -> Array [Number]
 * @description Finds all of the multiples of a number up until the limit provided
 * @param {Number} limit The limit to stop at, once the result equals or exceeds this value the function will return the current list
 * @param {Number} n The number to find the multiples for
 * @return {Array} A new Array of multiples that the function found
 * @example
 * import { multiples } from 'kyanite'
 *
 * multiples(100, 5) // => [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
 * multiples(100, 6) // => [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96]
 *
 * // It's also curried
 * const fn = multiples(100)
 *
 * fn(5) // => [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
 * fn(6) // => [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96]
 */
const multiples = (limit, n) => {
  const m = []

  for (let i = 0; i < limit; i++) {
    const result = i * n

    if (result > limit) {
      return m
    }

    _appendǃ(m, result)
  }

  return m
}

export default _curry2(multiples)
