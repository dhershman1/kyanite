import _curry2 from '../_internals/_curry2.js'
import _reduce from '../_internals/_reduce.js'
import _reduced from '../_internals/_reduced.js'

/** @private @type {<T = any>(fn: (a: T) => boolean, x: ReadonlyArray<T>) => boolean} */
const some = (fn, arr) =>
  _reduce((val, acc) =>
    fn(val) ? _reduced(true) : acc, false, arr)

/**
 * @name some
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @description
 * Loops through a provided list verifying that at least some values evaluates to a truthy value.
 * @param {Function} fn The function to send our values to for validation
 * @param {Array} arr The list we are to loop through
 * @return {Boolean} If any values passed will return true else false
 *
 * @example
 * import { some } from 'kyanite'
 *
 * const data = [1, 2, 3, 4]
 *
 * some(x => x > 0, data) // => true
 * some(x => x < 3) // => true
 * some(x => x < 0, data) // => false
 *
 * // It is also curried
 *
 * const run = some(x => x > 0)
 *
 * run([1, 2, 3]) // => true
 * run([-1, 0, 1]) // => true
 * run([-3, -2, -1]) // => false
 */
export default /** @type {{
  <T = any>(fn: (a: T) => boolean): (x: ReadonlyArray<T>) => boolean
  <T = any>(fn: (a: T) => boolean, x: ReadonlyArray<T>): boolean
}} */ (_curry2(some))
