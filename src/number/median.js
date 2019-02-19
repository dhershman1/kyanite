import sort from '../array/sort'
import ascend from '../function/ascend'
import mean from './mean'
import slice from '../list/slice'
import pipe from '../function/pipe'

/**
 * @name median
 * @function
 * @since v0.12.0
 * @category Number
 * @sig [Number] -> Number
 * @description Takes an array of numbers and calculates the median
 * @param {Array} list The array of numbers to calculate
 * @return {Number} The calculated median from the array
 *
 * @example
 * import { median } from 'kyanite'
 *
 * median([3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]) // => 23
 * median([3, 13, 7, 5, 21, 23, 23, 40, 23, 14, 12, 56, 23, 29]) // => 22
 */
const median = list => {
  const len = list.length

  if (len === 0) {
    return NaN
  }

  const width = 2 - len % 2
  const idx = (len - width) / 2

  return pipe([
    sort(ascend),
    slice(idx, idx + width),
    mean
  ], list)
}

export default median
