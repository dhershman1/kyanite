import _curry2 from '../_internals/_curry2.js'
import _reduce from '../_internals/_reduce.js'
import _reduced from '../_internals/_reduced.js'
/** @import { Pred } from '../_internals/_types.js' */

/** @private @type {(preds: Array<[Pred, (...a: readonly any[]) => any]>, value: any) => any} */
const cond = (preds, value) => {
  return _reduce(([check, act], acc) => {
    if (check(value)) {
      return _reduced(act(value))
    }

    return acc
  }, null, preds)
}

/**
 * @name cond
 * @function
 * @since v1.2.0
 * @category Function
 * @sig Array [(a -> Boolean)] -> Any -> Any
 * @description
 * Runs an array of predicate functions as a series of logic, once one of the predicate functions passes it will then call the action function provided
 * @param {Array} preds An array of arrays hold predicate functions for a check and action
 * @param {Any} value The value we want to run through the function list
 * @return {Any} The outcome of the triggered action function
 *
 * @example
 * import { always, cond, eq, T } from 'kyanite'
 *
 * cond([
 *  [eq(1), always('It is a one!')],
 *  [eq(2), always('It is a two!')],
 *  [T, always('It was nothing special')]
 * ], 1) // => 'It is a one!'
 *
 * // It's also curried
 * const fn = cond([
 *  [eq(1), always('It is a one!')],
 *  [eq(2), always('It is a two!')],
 *  [T, always('It was nothing special')]
 * ])
 *
 * fn(1) // => 'It is a one!'
 * fn(2) // => 'It is a two!'
 * fn(3) // => 'It was nothing special'
 */
export default /** @type {{
  (preds: Array<[Pred, (...a: readonly any[]) => any]>): (value: any) => any
  (preds: Array<[Pred, (...a: readonly any[]) => any]>, value: any): any
}} */ (_curry2(cond))
