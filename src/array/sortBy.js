import ascend from '../function/ascend'
import _curry2 from '../_internals/_curry2'
import on from '../function/on'
import sort from './sort'

/**
 * @name sortBy
 * @function
 * @since v0.2.1
 * @category Array
 * @sig Function -> Array -> Array
 * @description Sorts through an array of values using the provided function on each value
 * @param {Function} fn The function to use on values within our array
 * @param {Array} list The array to run through
 * @return {Array} A newly sorted array
 *
 * @example
 * import { sortBy } from 'kyanite'
 *
 * sortBy(x => x.name, [
 *  { name: 'bob' },
 *  { name: 'amanda' },
 *  { name: 'carl' },
 *  { name: 'amanda' }
 * ]) // => [{ name: 'amanda' }, { name: 'amanda' }, { name: 'bob' }, { name: 'carl' }]
 *
 * // It's also curried
 *
 * const sb = sortBy(x => x.name)
 *
 * sb([
 *  { name: 'bob' },
 *  { name: 'amanda' },
 *  { name: 'carl' },
 *  { name: 'amanda' }
 * ]) // => [{ name: 'amanda' }, { name: 'amanda' }, { name: 'bob' }, { name: 'carl' }]
 */
const sortBy = (fn, arr) => sort(on(ascend, fn), arr)

export default _curry2(sortBy)
