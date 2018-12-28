import nil from './nil'

/**
 * @name empty
 * @alias isEmpty
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
 * empty(NaN) // => true
 * empty(null) // => true
 * empty(undefined) // => true
 * empty(true) // => true
 * empty(false) // => true
 */
const empty = x => nil(x) || !Object.keys(x).length

export default empty
