import _curry2 from '../_internals/_curry2.js'

/** @private @type {<T = any>(key: string, val: T) => { [index: string]: T }} */
const objOf = (k, v) => ({ [k]: v })

/**
 * @name objOf
 * @function
 * @since v3.2.0
 * @category Object
 * @sig String -> a -> Object
 * @description Creates an object containing a single key:value pair.
 * @param {String} k The key to use for the object
 * @param {Any} v The value to use for the object
 * @return {Object} A new object with the key and value provided
 *
 * @example
 * import { objOf } from 'kyanite'
 *
 * objOf('a', 1) // => { a: 1 }
 * objOf('b', 2) // => { b: 2 }
 *
 * // It's also curried
 * const fn = objOf('a')
 *
 * fn(1) // => { a: 1 }
 */
export default /** @type {{
  <T = any>(key: string): (val: T) => { [index: string]: T }
  <T = any>(key: string, val: T): { [index: string]: T }
}} */ (_curry2(objOf))
