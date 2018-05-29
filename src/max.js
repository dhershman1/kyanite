import last from './last'

/**
 * @name max
 * @since v1.0.0
 * @category Array
 * @description
 * Goes through an array of values and grabs the last value of the array when it's been sorted
 * @param {Array} x The Array to sort and grab from
 * @return {Any} Returns the item at the end of an array based on what's passed in
 *
 * @example
 * max([1, 3, 2, 5, 4]); // => 5
 * max(['c', 'a', 'b', 'f']); // => 'f'
 */
const max = x => last(x.sort((a, b) => a > b))

export default max
