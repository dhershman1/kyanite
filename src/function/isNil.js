/**
 * @name isNil
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Checks if the value is a null value
 * @param  {Any}  x The value to run our test against
 * @return {Boolean} Returns a boolean based on the check
 *
 * @example
 * import { isNil } from 'kyanite'
 *
 * isNil(null) // => true
 * isNil() // => true
 * isNil(1) // => false
 * isNil(0) // => false
 * isNil('') // => false
 */
const isNil = x => x == null

export default isNil
