import curry from '../function/curry'

/**
 * @name sortBy
 * @since v0.2.1
 * @category Array
 * @sig Function -> Array -> Array
 * @description Sorts through an array of values using the provided function on each value
 * @param {Function} fn The function to use on values within our array
 * @param {Array} list The array to run through
 * @return {Array} A newly sorted array
 *
 * @example
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
const sortBy = (fn, list) => list.concat().sort((a, b) => {
  const x = fn(a)
  const y = fn(b)

  return x < y ? -1 : x > y ? 1 : 0
})

export default curry(sortBy)
