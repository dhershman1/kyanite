
/**
 * @name reverse
 * @since v0.1.0
 * @category List
 * @sig List a -> List a
 * @description Accepts a list of values or characters and reverses it
 * @param {Array|String} list The list to reverse
 * @return {Array|String} A new reversed list
 * @example
 * reverse([1, 2, 3]) // => [3, 2, 1]
 * reverse([]) // => []
 * reverse('abc') // => 'cba'
 */
const reverse = list =>
  Array.isArray(list) ? list.slice().reverse() : list.split('').reverse().join('')

export default reverse
