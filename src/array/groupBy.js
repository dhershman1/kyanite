import _curry2 from '../_internals/_curry2'
import has from '../object/has'

/**
 * @name groupBy
 * @since v0.2.1
 * @category Array
 * @sig Function -> Array -> Object
 * @description Groups values of an array based on the function passed in
 * @param {Function} fn The function to run our values through
 * @param {Array} list The array to go through
 * @return {Object} An object with the grouped values
 *
 * @example
 * groupBy(Math.floor, [4.2, 6.1, 6.4]) // => { '4': [4.2], '6': [6.1, 6.4] }
 *
 * // It's also curried
 *
 * const g = groupBy(Math.floor)
 *
 * g([4.2, 6.1, 6.4]) // => { '4': [4.2], '6': [6.1, 6.4] }
*/
const groupBy = (fn, list) => list.reduce((acc, v) => {
  const k = fn(v)
  const tmp = {}

  tmp[k] = has(k, acc) ? acc[k].concat(v) : [v]

  return Object.assign(acc, tmp)
}, {})

export default _curry2(groupBy)
