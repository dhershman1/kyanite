import curry from './curry'

/**
 * @name nth
 * @since v0.1.0
 * @category Array
 * @sig Number -> Array a -> Maybe a
 * @description Returns the nth element of the given list or string.
 * @param  {Number} o How much to offset the value
 * @param  {Array} x   The Array or list to crawl through
 * @return {Number} Returns the value of the found index
 *
 * @example
 * nth(3, [1, 2, 3, 4, 5, 6, 7]); // => 4
 *
 * // nth is curried
 *
 * const third = nth(2);
 *
 * third([1, 2, 3, 4, 5]); // => 3
 */
const nth = (o, x) => {
  const idx = o < 0 ? x.length + o : o

  return x[idx]
}

export default curry(nth)
