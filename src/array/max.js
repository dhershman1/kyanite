/**
 * @name max
 * @since v0.1.0
 * @category Array
 * @description
 * Goes through an array of values and grabs the last value of the array when it's been sorted
 * @param {Array} list The Array search through
 * @return {Any} The item that was deemed to be the max
 *
 * @example
 * max([1, 3, 2, 5, 4]) // => 5
 * max(['c', 'a', 'b', 'f']) // => 'f'
 */
const max = list => list.reduce((a, b) => a >= b ? a : b)

export default max
