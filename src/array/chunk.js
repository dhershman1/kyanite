import _curry2 from '../_internals/_curry2.js'
import _appendǃ from '../_internals/_appendǃ.js'
import rem from '../number/rem.js'

/** @private @type {<T = any>(size: number, data: ReadonlyArray<T>) => T[][]} */
const chunk = (size, data) =>
  data.reduce((acc, _, i) =>
    rem(size, i) ? acc : _appendǃ(acc, data.slice(i, i + size)), /** @type {any[]} */ ([]))

/**
 * @name chunk
 * @since v0.12.0
 * @function
 * @category Array
 * @sig Number -> Array -> Array
 * @description Takes an array of data and chunks it into smaller arrays based on the size param passed in
 * @param {Number} size The size the inner arrays should be
 * @param {Array} data The array of data to chunk out
 * @return {Array} A new array of arrays containing the chunked data
 * @example
 * import { chunk } from 'kyanite'
 *
 * chunk(2, [1, 2, 3, 4, 5, 6]) // => [[1, 2], [3, 4], [5, 6]]
 * chunk(2, [1, 2, 3, 4, 5]) // => [[1, 2], [3, 4], [5]]
 *
 * // It's also curried
 * const fn = chunk(2)
 *
 * fn([1, 2, 3, 4, 5, 6]) // => [[1, 2], [3, 4], [5, 6]]
 * fn([1, 2, 3, 4, 5]) // => [[1, 2], [3, 4], [5]]
 */
export default /** @type {{
  (size: number): <T = any>(data: ReadonlyArray<T>) => T[][]
  <T = any>(size: number, data: ReadonlyArray<T>): T[][]
}} */ (_curry2(chunk))
