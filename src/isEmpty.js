/**
 * @name isEmpty
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Determines if the entered value is empty or not
 * @param  {Any} x Value to check against
 * @return {Boolean} Returns the boolean after running our check
 *
 * @example
 * isEmpty([]) // => true
 * isEmpty({}) // => true
 * isEmpty('') // => true
 * isEmpty(NaN) // => true
 * isEmpty(null) // => true
 * isEmpty(undefined) // => true
 * isEmpty(true) // => true
 * isEmpty(false) // => true
 */
const isEmpty = x => !x || !Object.keys(x).length

export default isEmpty
