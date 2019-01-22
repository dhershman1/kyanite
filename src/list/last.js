
/**
 * @name last
 * @function
 * @since v0.1.0
 * @category List
 * @sig
 * [a] -> a | Undefined
 * String -> String
 * @description Grabs the last index of a list
 * @param  {Array|String} x The list or string we want to use
 * @return {Any} Returns whatever was the last piece of our list
 *
 * @example
 * import { last } from 'kyanite'
 *
 * const arr = last([1, 3]) // => 3
 * const str = last('abc') // => 'c'
 */
const last = x => x[x.length - 1]

export default last
