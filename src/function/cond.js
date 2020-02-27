import _curry2 from '../_internals/_curry2'
import reduce from './reduce'
import reduced from './reduced'

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
const cond = (preds, value) => {
  return reduce(([check, act], acc) => {
    if (check(value)) {
      return reduced(act(value))
    }

    return acc
  }, null, preds)
}

export default _curry2(cond)
