import _curry2 from '../_internals/_curry2'

/**
 * @name range
 * @since v0.1.0
 * @category Function
 * @sig Number a -> Number b -> [Number a...b]
 * @description Create an array range from start to end
 * @param  {Number} from Starting number for the range
 * @param  {Number} to Number to end on for the range
 * @return {Array} Returns an array of numbers consisting of the range
 *
 * @example
 * range(3, 7) // => [3, 4, 5, 6]
 * range(0, 3) // => [0, 1, 2]
 * range(0, 0) // => []
 * range(NaN) // => []
 */
const range = (from, to) => {
  const result = []
  let start = Number(from)

  while (start < Number(to)) {
    result.push(start)
    start += 1
  }

  return result
}

export default _curry2(range)
