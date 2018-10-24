import _curry3 from '../_internals/_curry3'

/**
 * @name reduceRight
 * @since v0.10.0
 * @category Array
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @description Similar to reduce except this moves through the array starting from the right
 * @param {Function} fn The iterator function to call for the reduce
 * @param {Any} init The init value to start the accumulator at
 * @param {Array} arr The Array to reduce
 * @return {Any} The new accumulated value
 * @example
 *
 * reduceRight((acc, n) =>
 *   typeof n === 'number' ? acc.push(n) : acc, [], ['', 1, 2, '0', 3]) // => [3, 2, 1]
 *
 * // It's also curried
 * const fn = reduceRight((acc, x) => typeof n === 'number' ? acc.push(n) : acc)
 *
 * fn([], ['', 1, 2, '0', 3]) // => [3, 2, 1]
 */
const reduceRight = (fn, init, arr) => arr.reduceRight(fn, init)

export default _curry3(reduceRight)
