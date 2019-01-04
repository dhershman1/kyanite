import nil from './nil'
import count from './count'

/**
 * @name empty
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Determines if the entered value is empty or not
 * @param  {Any} x Value to check against
 * @return {Boolean} Returns the boolean after running our check
 *
 * @example
 * import { empty } from 'kyanite'
 *
 * empty([]) // => true
 * empty({}) // => true
 * empty('') // => true
 * empty(new Map()) // => true
 * empty(new Set()) // => true
 * empty(null) // => true
 * empty(undefined) // => true
 * empty(NaN) // => TypeError: Unsupported type: Number
 * empty(true) // => TypeError: Unsupported type: Boolean
 * empty(false) // => TypeError: Unsupported type: Boolean
 */
const empty = x => nil(x) || !count(x)

export default empty
