import _curry2 from '../_internals/_curry2.js'

/** @private @type {<T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any) => boolean} */
const and = (a, b) => a && b

/**
 * @name and
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> a | b
 * @description
 * Runs an and comparison on the two values passed in
 * @param {Any} a The first value to compare
 * @param {Any} b The second value to compare
 * @return {Any} The evaluated outcome of the parameters
 *
 * @example
 * import { and } from 'kyanite'
 *
 * and(true, true) // => true
 * and(true, false) // => false
 * and(false, false) // => false
 */
export default /** @type {{
  <T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean
  <T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean
}} */ (_curry2(and))
