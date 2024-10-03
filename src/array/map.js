import _curry2 from '../_internals/_curry2.js'
import _assocǃ from '../_internals/_assocǃ.js'

/**
 * @name map
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> b) -> [a] -> [b]
 * @description
 * Takes a function and applies it to all of the values within the provided list,
 * and brings back a new list of the same type.
 * @param {Function} fn The function to run against the values in our functor
 * @param {Array} list The list to iterate through
 * @return {Array} The new Array or Object that was created
 *
 * @example
 * import { map } from 'kyanite'
 *
 * const dbl = n => n * 2
 *
 * map(dbl, [1, 2, 3]) // => [2, 4, 6]
 *
 * // It's also curried
 *
 * const dbler = map(dbl)
 *
 * dbler([1, 2, 3]) // => [2, 4, 6]
 */
const map = (fn, list) => {
  let idx = 0
  const len = list.length
  const result = Array(len)

  while (idx < len) {
    _assocǃ(result, idx, fn(list[idx]))
    idx += 1
  }

  return result
}

export default _curry2(map)
