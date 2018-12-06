import _curry2 from '../_internals/_curry2'

/**
 * @name concat
 * @function
 * @since v0.1.0
 * @category List
 * @sig
 * a -> Array -> Array
 * String -> String -> String
 * @description Take a List and concats the values into a new List
 * @param {Any} val The value to concat into the List
 * @param {Array|String} list The list of items or characters we want to concat the value to
 * @return {Array} A newly created list with the value added
 * @example
 * import { concat } from 'kyanite'
 *
 * concat(4, [1, 2, 3]) // => [1, 2, 3, 4]
 * concat('bar', 'foo') // => 'foobar'
 */
const concat = (val, list) =>
  list.concat(val)

export default _curry2(concat)
