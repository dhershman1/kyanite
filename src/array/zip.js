import assign from '../object/assign'
import curry from '../function/curry'

/**
 * @name zip
 * @since v0.5.0
 * @category Array
 * @sig Array -> Array -> Object
 * @description Takes two arrays and combines them into a key value pair object
 * @param {Array} x The array that will act as keys
 * @param {Array} y The array that will act as values
 * @return {Object} The combined arrays key value pair
 * @example
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

  return arr.reduce((acc, _, i) => {
    const tmp = {}

    tmp[x[i]] = y[i]

    return assign(acc, tmp)
  }, {})
}

export default curry(zip)
