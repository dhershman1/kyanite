import _curry3 from '../_internals/_curry3'
import path from './path'

/**
 * @name pathSatisfies
 * @function
 * @since v1.6.0
 * @category Object
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @description Runs a path check on a given object and then runs a predicate function on the result
 * @param {Function} pred The predicate function to run on the value that comes back from the object path
 * @param {Array} keys The path to safely traverse the object with
 * @param {Object} obj The object to traverse
 * @return {Any} true if the given path satifies the given predicate, false otherwise
 *
 * @example
 * import { pathSatisfies } from 'kyanite'
 *
 * pathSatisfies(y => y > 0, ['x', 'y'], { x: { y: 2 } }) // => true
 * pathSatisfies(y => y > 0, ['a', 'b', 'c'], { a: 3 }) // => false
 *
 * // Is also curried
 *
 * const safetyPath = pathSatisfies(y => y > 0, ['x', 'y'])
 *
 * safetyPath({ x: { y: 2 } }) // => true
 */
const pathSatisfies = (pred, keys, obj) =>
  pred(path(keys, obj))

export default _curry3(pathSatisfies)
