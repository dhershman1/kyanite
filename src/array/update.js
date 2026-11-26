import _curry3 from '../_internals/_curry3.js'
import adjust from './adjust.js'
import always from '../function/always.js'

/** @private @type {<T = any>(index: number, val: any, list: ReadonlyArray<T>) => T[]} */
const update = (idx, val, list) => adjust(idx, always(val), list)

/**
 * @name update
 * @function
 * @since v0.1.0
 * @category Array
 * @sig Number -> a -> [b] -> [c]
 * @description Add an item to an array within a certain index of the array
 * @param  {Number} idx The index number to add at
 * @param  {Any} val What we want to add to our array
 * @param  {Array} list The array in question
 * @return {Array} Returns the modified array
 *
 * @example
 * import { update } from 'kyanite'
 *
 * update(1, 10, [1, 2, 3]) // => [1, 10, 3]
 * update(-1, 10, [1, 2, 3]) // => [1, 2, 10]
 *
 * // You can also use it as a curried method
 *
 * const updater = update(2, 10)
 *
 * updater([1, 2, 3]) // => [1, 2, 10]
 *
 * // This can be taken further like so
 *
 * const index = update(2)
 * const val = index(10)
 * val([1, 2, 3]) // => [1, 2, 10]
 */
export default /** @type {{
  (index: number): {
    (val: any): <T = any>(list: ReadonlyArray<T>) => T[]
    <T = any>(val: any, list: ReadonlyArray<T>): T[]
  }
  (index: number, val: any): <T = any>(list: ReadonlyArray<T>) => T[]
  <T = any>(index: number, val: any, list: ReadonlyArray<T>): T[]
}} */ (_curry3(update))
