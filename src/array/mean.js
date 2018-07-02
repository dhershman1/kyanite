/**
 * @name mean
 * @since v0.1.0
 * @category Array
 * @sig [Number] -> Number
 * @description Get the mean of a set of numbers
 * @param  {Array} x An amount of numbers to get the mean from
 * @return {Number} Returns the mean avg of the numbers
 *
 * @example
 * mean([1, 2, 3, 2]); // => 2
 * mean([]); // => NaN
 * mean(); // => NaN
 */
const mean = (x = []) => {
  if (!x.length) {
    return 0
  }

  return x.reduce((a, v) => a + v, 0) / x.length
}

export default mean
