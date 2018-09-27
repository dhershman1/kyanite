import curry from '../function/curry'

/**
 * @name concat
 * @since v0.1.0
 * @category List
 * @sig List -> List
 * @description Take a List and concats the values into a new List
 * @param {Any} val The value to concat into the List
 * @param {Array|String} list The list of items or characters we want to concat the value to
 * @return {Array} A newly created list with the value added
 * @example
 * concat(4, [1, 2, 3]) // => [1, 2, 3, 4]
 * concat('bar', 'foo') // => 'foobar'
 */
const concat = (val, list) =>
  list.concat(val)

export default curry(concat)
