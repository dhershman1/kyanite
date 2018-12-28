/**
 * @name nil
 * @function
 * @since v0.11.0
 * @category Function
 * @sig a -> Boolean
 * @description Checks if the value is a null value
 * @param  {Any}  x The value to run our test against
 * @return {Boolean} Returns a boolean based on the check
 *
 * @example
 * import { nil } from 'kyanite'
 *
 * nil(null) // => true
 * nil() // => true
 * nil(1) // => false
 */
const nil = x => x == null

export default nil
