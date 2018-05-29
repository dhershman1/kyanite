import curry from './curry'

/**
 * @name insert
 * @since v3.0.0
 * @category Array
 * @sig Number -> a -> [b]
 * @description Insert an item in a certain index of an array
 * @param  {Number} i The index number to remove from
 * @param  {Any} d The data we are going to be inserting
 * @param  {Array} arr The array to insert into
 * @return {Array} A new array with the inserted data
 *
 * @example
 * insert(2, 'x', [1, 2, 3, 4]) // => [1, 2, 'x', 3, 4]
 *
 * // It's also curried
 *
 * const ins = insert(2)
 *
 * ins('x', [1, 2, 3, 4]) // => [1, 2, 'x', 3, 4]
 */
const insert = (i, d, arr) => {
  const idx = i < arr.length && i >= 0 ? i : arr.length
  const result = arr.slice(0)

  result.splice(idx, 0, d)

  return result
}

export default curry(insert)
