import _curry2 from '../_internals/_curry2'

/**
 * @name prepend
 * @since v0.1.0
 * @function
 * @category Array
 * @sig a -> [a] -> [a]
 * @description Returns a new list with the provided value at the front of the given list
 * @param  {Any} x The value we want to put at the front of our list
 * @param  {Array} list The Array or list to prepend to
 * @return {Array} A new array
 *
 * @example
 * import { prepend } from 'kyanite'
 *
 * prepend('testing', ['is', 'cool']) // => ['testing', 'is', 'cool']
 *
 * // It's curried
 *
 * const pender = prepend('testing')
 *
 * pender(['is', 'cool']) // => ['testing', 'is', 'cool']
 */
const prepend = (x, list) => [].concat(x, list)

export default _curry2(prepend)
