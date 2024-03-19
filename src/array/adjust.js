import _curry3 from '../_internals/_curry3.js'

/**
 * @name adjust
 * @since v3.0.0
 * @function
 * @category Array
 * @sig Number -> (a -> a) -> [a] -> [a]
 * @description Applies a function to the value at the given index of an array, returning a new copy of the array with the element at the given index replaced with the result of the function application.
 * @param {Number} idx The index the value we want to change is at
 * @param {Function} fn The function to apply
 * @param {Array} list The array of data
 * @return {Array}  A copy of the supplied array with the element at index `idx` replaced with the value returned by applying `fn` to the existing element.
 * @example
 * import { adjust, inc, toUpper } from 'kyanite'
 *
 * adjust(1, inc, [0, 1, 2, 3]) // => [0, 2, 2, 3]
 * adjust(1, toUpper, ['a', 'b', 'c']) // => ['a', 'B', 'c']
 *
 * // adjust can also be curried
 *
 * const fn = adjust(1)
 *
 * fn(toUpper, ['a', 'b', 'c']) // => ['a', 'B', 'c]
 */
const adjust = (idx, fn, list) => {
  const len = list.length

  if (idx >= len || idx < -len) {
    return list
  }

  const _idx = (len + idx) % len
  const _list = [...list]

  _list[_idx] = fn(_list[_idx])

  return _list
}

export default _curry3(adjust)
