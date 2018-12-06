import _curry2 from '../_internals/_curry2'

/**
 * @name minBy
 * @function
 * @since v0.5.0
 * @category Array
 * @description
 * Finds the minimum value in an array by applying a provided function to the value first before comparing it
 * @param {Function} fn The function to apply to each value of the array
 * @param {Array} list The Array to iterate through
 * @return {Any} The found or "deemed" minimum value of the array
 *
 * @example
 * import { minBy } from 'kyanite'
 *
 * minBy(x => x.size, [{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }]) // => { size: 2 }
 * minBy(x => x.alpha, [{ alpha: 'b' }, { alpha: 'c' }, { alpha: 'a' }]) // => { alpha: 'a' }
 *
 * // It's also curried
 *
 * const m = minBy(x => x.size)
 *
 * m([{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }]) // => { size: 2 }
 */
const minBy = (fn, list) => list.reduce((a, b) => fn(a) <= fn(b) ? a : b)

export default _curry2(minBy)
