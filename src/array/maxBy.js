import _curry2 from '../_internals/_curry2'

/**
 * @name maxBy
 * @function
 * @since v0.5.0
 * @category Array
 * @sig (a -> b) -> [a] -> a
 * @description
 * Finds the maximum value in an array by applying a provided function to the value first before comparing it
 * @param {Function} fn The function to apply to each value of the array
 * @param {Array} list The Array to iterate through
 * @return {Any} The found or "deemed" maximum value of the array
 *
 * @example
 * import { maxBy } from 'kyanite'
 *
 * maxBy(x => x.size, [{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }]) // => { size: 6 }
 * maxBy(x => x.alpha, [{ alpha: 'b' }, { alpha: 'c' }, { alpha: 'a' }]) // => { alpha: 'c' }
 *
 * // It's also curried
 *
 * const m = maxBy(x => x.size)
 *
 * m([{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }]) // => { size: 6 }
 */
const maxBy = (fn, list) => list.reduce((a, b) => fn(a) >= fn(b) ? a : b)

export default _curry2(maxBy)
