import _curry2 from '../_internals/_curry2.js'
import uniq from './uniq.js'

/** @private @type {<T = any>(a: ReadonlyArray<T>, b: ReadonlyArray<T>) => T[]} */
const intersection = (a, b) => {
  const inB = new Set(b)

  return uniq(a.filter(x => inB.has(x)))
}

/**
 * @name intersection
 * @function
 * @since v0.1.0
 * @category Array
 * @sig [*] -> [*] -> [*]
 * @description Returns an array containing elements present in both arrays
 * @param {Array} a Our first array value to compare with
 * @param {Array} b Our second array value to compare with
 * @return {Array} A new array containing values that both arrays had
 *
 * @example
 * import { intersection } from 'kyanite'
 *
 * intersection([1, 2, 3, 4], [3, 4, 5, 6]) // => [3, 4]
 *
 * // It's also curried
 *
 * const inter = intersection([1, 2, 3, 4])
 *
 * inter([3, 4, 5, 6]) // => [3, 4]
 */
export default /** @type {{
  <T = any>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[]
  <T = any>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[]
}} */ (_curry2(intersection))
