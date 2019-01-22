import _curry2 from '../_internals/_curry2'

/**
 * @name nth
 * @function
 * @since v0.1.0
 * @category List
 * @sig
 * Number -> Array a -> a | Undefined
 * Number -> String -> String | Undefined
 * @description Returns the nth element of the given list
 * @param  {Number} o How much to offset the value
 * @param  {Array|String} list The Array or list to crawl through
 * @return {Any} Returns the value found at the index
 *
 * @example
 * import { nth } from 'kyanite'
 *
 * nth(3, [1, 2, 3, 4, 5, 6, 7]) // => 4
 *
 * // nth is curried
 *
 * const third = nth(2)
 *
 * third([1, 2, 3, 4, 5]) // => 3
 */
const nth = (o, list) => {
  const i = o < 0 ? list.length + o : o

  return list[i]
}

export default _curry2(nth)
