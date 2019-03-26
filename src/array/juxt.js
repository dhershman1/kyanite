import _curry2 from '../_internals/_curry2'
import map from './map'

/**
 * @name juxt
 * @function
 * @since v0.1.0
 * @category Array
 * @sig [(a, b, ...) -> c] -> [a, b, ...] -> [[c]]
 * @description Applies the provided function and turns them into a single function you can use on a value
 * @param {Array} fns An array of functions to apply
 * @param {Array} x The data to map our functions against
 * @return {Array} An array of results from the ran functions
 *
 * @example
 * import { juxt } from 'kyanite'
 *
 * juxt([Math.min, Math.max], [3, 6, -7, 1]) // => [-7, 6]
 *
 * // It's curried
 * const getRange = juxt([Math.min, Math.max])
 *
 * getRange([3, 4, 9, -3]) // => [-3, 9]
 */
const juxt = (fns, x) => map(f => f(...x), fns)

export default _curry2(juxt)
