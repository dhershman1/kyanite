/**
 * @name not
 * @function
 * @since v0.1.0
 * @category Function
 * @sig * -> Boolean
 * @description Returns boolean based on if the value is not
 * @param  {Boolean} x The values to compare against
 * @return {Boolean}   Returns boolean back based on the results
 *
 * @example
 * import { not } from 'kyanite'
 *
 * const reverse = not(true) // => false
 */
const not = x => !x

export default not
