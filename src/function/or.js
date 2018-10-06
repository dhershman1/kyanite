import curryN from './curryN'
import identity from './identity'

/**
 * @name or
 * @since v0.1.0
 * @category Function
 * @sig Boolean -> Boolean -> Boolean
 * @description
 * Runs an or comparison on the two values passed in
 * @param {...Boolean} args The values to be used to make sure some of them are passing
 * @return {Boolean} The evaluated outcome of the parameters
 *
 * @example
 * or(true, true) // => true
 * or(true, false) // => true
 * or(false, false) // => false
 */
const or = (...args) => args.some(identity)

export default curryN(2, or)
