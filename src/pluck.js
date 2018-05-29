import curry from './curry'
import isObject from './_internals/isObject'

/**
 * @name pluck
 * @since v0.6.0
 * @category Object
 * @sig k -> f {k: v} -> f v
 * @description Recursively digs through objects to create a new list of values based on the provided property name and provided object
 * @param {String} p The property to look for
 * @param {Array|Object} list An array of objects or a single object to pluck through
 * @return {Array} The new list which will be the same type as the list provided
 *
 * @example
 * pluck('val', { a: { val: 3 }, b: { val: 5 } }); // => { a: 3, b: 5 }
 *
 * // It is also curried
 * const plucker = pluck('a');
 *
 * plucker([{ a: 1 }, { a: 2 }]); // => [1, 2]
 */
const pluck = (p, list) =>
  Object.keys(list).reduce((acc, v) => {
    const val = list[v]

    if (isObject(val)) {
      return acc.concat(pluck(p, val))
    }

    if (v === p) {
      acc.push(val)
    }

    return acc
  }, [])

export default curry(pluck)
