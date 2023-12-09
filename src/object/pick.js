import _curry2 from '../_internals/_curry2.js'

/**
 * @name pick
 * @function
 * @since v2.1.0
 * @category Object
 * @sig [k] -> { k: a } -> { k: a }
 * @description Picks only the requested keys from a provided object
 * @param  {Array} keys The keys we want to pick out of the object
 * @param  {Object} obj The object to pull the data from
 * @return {Object} Returns a new object of only the picked keys provided
 *
 * @example
 * import { pick } from 'kyanite'
 *
 * pick(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }) // => { a: 1, d: 4 }
 * pick(['a', 'e', 'f'], { a: 3 }) // => { a: 3 }
 *
 * // Is also curried
 *
 * const picker = pick(['a', 'd'])
 *
 * picker({ a: 1, b: 2, c: 3, d: 4 }) // => { a: 1, d: 4 }
 */
const pick = _curry2(function pick (keys, obj) {
  const result = {}
  let idx = 0

  while (idx < keys.length) {
    if (keys[idx] in obj) {
      result[keys[idx]] = obj[keys[idx]]
    }

    idx += 1
  }

  return result
})

export default pick
