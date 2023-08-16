import _curry3 from '../_internals/_curry3.js'

/**
 * @name propSatisfies
 * @function
 * @since v1.6.0
 * @category Object
 * @sig (a -> Boolean) -> String -> { String: a } -> Boolean
 * @description Pulls a values from an object and then passes it to a predicate function
 * @param {Function} pred The predicate function to run on the value that comes back from the object
 * @param {Array} key The key to pull from the provided object
 * @param {Object} obj The object to pull from
 * @return {Any} true if the found value satifies the given predicate, false otherwise
 *
 * @example
 * import { propSatisfies } from 'kyanite'
 *
 * propSatisfies(y => y > 0, 'y', { x: 1, y: 4 }) // => true
 * propSatisfies(y => y > 0, 'b', { a: 3 }) // => false
 *
 * // Is also curried
 *
 * const safetyProp = propSatisfies(y => y > 0, 'y')
 *
 * safetyProp({ x: 1, y: 4 }) // => true
 */
const propSatisfies = (pred, key, obj) =>
  pred(obj[key])

export default _curry3(propSatisfies)
