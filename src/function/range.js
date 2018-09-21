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
 * range(3) // => [0, 1, 2]
 * range() // => []
 * range(NaN) // => TypeError: Arguments should be Numbers
 */
const range = (from = 0, to = 0) => {
  if (isNaN(from) || (to && isNaN(to))) {
    throw new TypeError('Arguments should be Numbers')
  }

  const result = []
  let stop = Number(to)
  let start = Number(from)

  if (!to) {
    stop = Number(from)
    start = 0
  }

  while (start < stop) {
    result.push(start)
    start += 1
  }

  return result
}

export default range
