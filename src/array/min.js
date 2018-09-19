/**
 * @name min
 * @since v0.1.0
 * @category Array
 * @description
 * Goes through an array of values and grabs the first value of the array when it's been sorted
 * @param {Array} list The Array to sort and grab from
 * @return {Any} Returns the item at the start of an array based on what's passed in
 *
 * @example
 * min([1, 3, 2, 5, 4]) // => 1
 * min(['c', 'a', 'b', 'f']) // => 'a'
 */
const min = list => list.reduce((a, b) => a <= b ? a : b)

export default min
