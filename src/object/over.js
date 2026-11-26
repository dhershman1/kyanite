import _curry3 from '../_internals/_curry3.js'
/** @import { Arity1Fn } from '../_internals/_types.js' */

/** @private @type {<T = any>(key: string, fn: Arity1Fn, acc: T) => T} */
const over = (key, fn, acc) =>
  Object.assign({}, acc, { [key]: fn(/** @type {any} */ (acc)[key]) })

/**
 * @name over
 * @function
 * @since v0.10.1
 * @sig String -> Function -> Object -> Object
 * @category Object
 * @description Applies a function to a value within an object
 * @param {String} key The key to look for within the object
 * @param {Function} fn The function to apply to the value
 * @param {Object} acc The object accumulator
 * @return {Object} A new object with the applied value
 * @example
 * import { over } from 'kyanite'
 *
 * over('b', x => x + 1, { a: 1, b: 1, c: 3 }) // => { a: 1, b: 2, c: 3 }
 *
 * // It's also curried
 *
 * const o = over('b')
 * const withFn = o(x => x + 1)
 *
 * o(x => x - 1, { a: 1, b: 3 }) // => { a: 1, b: 2 }
 * withFn({ a: 1, b: 1 }) // => { a: 1, b: 2 }
 */
export default /** @type {{
  (key: string): {
    (fn: Arity1Fn): <T = any>(acc: T) => T
    <T = any>(fn: Arity1Fn, acc: T): T
  }
  (key: string, fn: Arity1Fn): <T = any>(acc: T) => T
  <T = any>(key: string, fn: Arity1Fn, acc: T): T
}} */ (_curry3(over))
