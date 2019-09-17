import _curry2 from '../_internals/_curry2'
import _appendǃ from '../_internals/_appendǃ'
import _assocǃ from '../_internals/_assocǃ'
import reduce from '../function/reduce'

/**
 * @name groupBy
 * @function
 * @since v0.2.1
 * @category Array
 * @sig (a -> String) -> [a] -> { String: [a] }
 * @description Groups values of an array based on the function passed in
 * @param {Function} fn The function to run our values through
 * @param {Array} list The array to go through
 * @return {Object} An object with the grouped values
 *
 * @example
 * import { groupBy } from 'kyanite'
 *
 * groupBy(Math.floor, [4.2, 6.1, 6.4]) // => { '4': [4.2], '6': [6.1, 6.4] }
 *
 * // It's also curried
 *
 * const g = groupBy(Math.floor)
 *
 * g([4.2, 6.1, 6.4]) // => { '4': [4.2], '6': [6.1, 6.4] }
*/
const groupBy = (fn, list) =>
  reduce((v, acc) => {
    const k = fn(v)
    const _an = _assocǃ(acc, k)

    return Object.prototype.hasOwnProperty.call(acc, k) ? _an(_appendǃ(acc[k], v)) : _an([v])
  }, {}, list)

export default _curry2(groupBy)
