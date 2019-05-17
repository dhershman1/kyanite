import _curry2 from '../_internals/_curry2'
import reduce from '../function/reduce'
import reduced from '../function/reduced'

/**
 * @name find
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> Boolean) -> [a] -> Maybe a
 * @description Find an item based on the function sent in and its list
 * @param  {Function} fn The function used/called during the find
 * @param  {Array} arr The list we want to search through
 * @return {Maybe} Returns either the found item, or undefined if no item is found
 *
 * @example
 * import { find } from 'kyanite'
 *
 * find(v => v.val === 'none', [{val: 'test'}, {val: 'none'}]) // => { val: 'none' }
 * find(v => v > 2, [1, 2, 3, 4, 5]) // => 3
 *
 * // find is also curried
 *
 * const fn = find(v => v.val === 'test')
 *
 * fn([{val: 'test'}, {val: 'none'}]) // => { val: 'test' }
 */
const find = (fn, arr) =>
  reduce((val, acc) =>
    fn(val) ? reduced(val) : acc, undefined, arr)

export default _curry2(find)
