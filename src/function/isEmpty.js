import isNil from './isNil.js'
import count from './count.js'

/** @private @type {(x: any) => boolean} */
const isEmpty = x => isNil(x) || !count(x)

/**
 * @name isEmpty
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Determines if the entered value is empty or not
 * Supports arrays, strings, objects, Maps, Sets, null, and undefined. Any other type throws a TypeError
 * @param  {Any} x Value to check against
 * @return {Boolean} Returns the boolean after running our check
 *
 * @example
 * import { isEmpty } from 'kyanite'
 *
 * isEmpty([]) // => true
 * isEmpty({}) // => true
 * isEmpty('') // => true
 * isEmpty(new Map()) // => true
 * isEmpty(new Set()) // => true
 * isEmpty(null) // => true
 * isEmpty(undefined) // => true
 * isEmpty([1]) // => false
 * isEmpty(0) // => TypeError: Unsupported type: Number
 * isEmpty(true) // => TypeError: Unsupported type: Boolean
 */
export default /** @type {{
  (x: any): boolean
}} */ (isEmpty)
