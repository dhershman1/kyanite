/**
 * @name concat
 * @since v3.0.0
 * @category Array
 * @sig Array -> Array
 * @description Take an array and concats the values into a new array
 * @param {Array} arr The array to concat together
 * @return {Array} A newly created array of the concated values
 * @example
 * concat([[1, 2], [3, 4], [5, 6]]) // => [1, 2, 3, 4, 5, 6]
 */
const concat = arr =>
  arr.reduce((acc, v) => acc.concat(v), [])

export default concat
