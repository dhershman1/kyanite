import _curry3 from '../_internals/_curry3.js'
import map from '../array/map.js'

/**
 * @name converge
 * @since v1.3.0
 * @function
 * @category Function
 * @sig (...b -> c) -> [...(a -> b)] -> a -> c
 * @description Takes a converging function, a list of data functions, and the data itself. Runs the data through each data function individually, and then passes the array of values to the converging function.
 * @param {Function} convFn The converging function our array of data is given to
 * @param {Array} fns The array of data functions to run our data with
 * @param {Any} data The data we want to converge with
 * @return {Any} The results of the converging function
 * @example
 * import { converge, divide, length, sum } from 'kyanite'
 *
 * converge(divide, [sum, length], [1, 2, 3, 4, 5, 6, 7]) // => 4
 *
 * // It's also curried
 * const fn = converge(divide, [sum, length])
 *
 * fn([1, 2, 3, 4, 5, 6, 7]) // => 4
 * fn([1, 2, 3]) // => 2
 */
const converge = (convFn, fns, data) =>
  convFn(...map(f => f(data), fns))

export default _curry3(converge)
