/**
 * @name first
 * @function
 * @since v0.1.0
 * @category List
 * @sig
 * [a] -> a | Undefined
 * String -> String | Undefined
 * @description Grabs the first index of a list
 * @param  {Array|String} x The list or string we want to use
 * @return {Any} Returns whatever was the first piece of our list
 *
 * @example
 * import { first } from 'kyanite'
 *
 * const arr = first([1, 3]) // => 1
 * const str = first('abc') // => 'a'
 */
const first = x => x[0]

export default first
