import curry from '../function/curry'

/**
 * @name maxBy
 * @since v0.5.0
 * @category Array
 * @description
 * Finds the max of an array by applying the provided function to the values provided and reducing it down
 * @param {Function} fn The function to apply to each value of the array
 * @param {Array} list The Array to search through
 * @return {Any} The item that was deemed to be the max
 *
 * @example
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

export default curry(maxBy)
