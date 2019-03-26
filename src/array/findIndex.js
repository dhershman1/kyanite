import _curry2 from '../_internals/_curry2'

/**
 * @name findIndex
 * @function
 * @since v0.2.2
 * @category Array
 * @sig (a -> Boolean) -> [a] -> Maybe
 * @description Runs through an array of values, until it finds the index of one that passes the function, else returns -1
 * @param {Function} fn The function to test our value against
 * @param {Array} list The array to loop through
 * @return {Number} The index the passing value lives at or -1 if it's not found
 * @example
 * import { findIndex } from 'kyanite'
 *
 * findIndex(x => x > 5, [1, 3, 4, 5, 6]) // => 4
 * findIndex(x => x < 0, [1, 3, 4, 5, 6]) // => -1
 *
 * // It's also curried
 * const f = findIndex(x => x > 5)
 *
 * f([1, 2, 3, 4, 5, 6]) // => 5
 */
const findIndex = (fn, list) => list.findIndex(fn)

export default _curry2(findIndex)
