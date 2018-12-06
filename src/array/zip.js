import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'

/**
 * @name zip
 * @function
 * @since v0.5.0
 * @category Array
 * @sig Array -> Array -> Object
 * @description Takes two arrays and combines them into a key value pair object
 * @param {Array} x The array that will act as keys
 * @param {Array} y The array that will act as values
 * @return {Object} The combined arrays key value pair
 * @example
 * import { zip } from 'kyanite'
 *
 * zip(['a', 'b', 'c'], [1, 2, 3]) // => { a: 1, b: 2, c: 3 }
 * zip(['a', 'b', 'c'], [1, 2, 3, 4]) // => { a: 1, b: 2, c: 3 }
 * zip(['a', 'b', 'c'], [1, 2]) // => { a: 1, b: 2 }
 *
 * // It's also curried
 *
 * const z = zip(['a', 'b', 'c'])
 *
 * z([1, 2, 3]) // => { a: 1, b: 2, c: 3 }
 * z([1, 2, 3, 4]) // => { a: 1, b: 2, c: 3 }
 * z([1, 2]) // => { a: 1, b: 2 }
 */
const zip = (x, y) => {
  const arr = x.length < y.length ? x : y

  return arr.reduce((acc, _, i) => _assocǃ(acc, x[i], y[i]), {})
}

export default _curry2(zip)
