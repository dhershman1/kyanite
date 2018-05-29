
/**
 * @name reverse
 * @since v2.0.0
 * @category Array
 * @sig Array a -> Array a
 * @description Accepts an array and returns a brand new reversed array
 * @param {Array} arr The array to reverse
 * @return {Array} A new reversed array
 *
 * @example
 * reverse([1, 2, 3]); // => [3, 2, 1]
 * reverse([]); // => []
 */
const reverse = arr => arr.slice().reverse()

export default reverse
