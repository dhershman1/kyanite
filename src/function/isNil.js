/**
 * @name isNil
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Checks if the value is a null value
 * @param  {Any}  x The value to run our test against
 * @return {Boolean} Returns a boolean based on the check
 *
 * @example
 * isNill(null) // => true
 * isNill() // => true
 * isNill(1) // => false
 */
const isNil = x => x == null

export default isNil
