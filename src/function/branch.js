import _curry4 from '../_internals/_curry4.js'

/** @private @type {<T = any, R1 = any, R2 = any>(p: (obj: T) => boolean, f: (obj: T) => R1, g: (obj: T) => R2, data: T) => R1 | R2} */
const branch = (p, f, g, a) => p(a) ? f(a) : g(a)

/**
 * @name branch
 * @function
 * @since v0.4.0
 * @category Function
 * @sig (a -> Boolean) -> (a -> b) -> (a -> b)
 * @description
 * Takes 3 functions and a value, and will run either the 2nd or 3rd function based on if the first passes
 * @param {Function} p The first function to determine the path of our branch
 * @param {Function} f The function to run if the first passes
 * @param {Function} g The function to run if the first fails
 * @param {Any} a The data to pass long our functions
 * @return {Any} The result of the branch function used
 * @example
 * import { branch } from 'kyanite'
 *
 * branch(
 *   x => x < 10,
 *   x => x + 1,
 *   x => x - 1,
 *   0
 * ) // => 1
 *
 * // It's also curried
 * const b = branch(
 *   x => x < 10,
 *   x => x + 1,
 *   x => x - 1
 * )
 *
 * b(0) // => 1
 * b(12) // => 11
 */
export default /** @type {{
  <T = any>(p: (obj: T) => boolean): {
    <R1 = any>(f: (obj: T) => R1): {
      <R2 = any>(g: (obj: T) => R2): (data: T) => R1 | R2
      <R2 = any>(g: (obj: T) => R2, data: T): R1 | R2
    }
    <R1 = any, R2 = any>(f: (obj: T) => R1, g: (obj: T) => R2): (data: T) => R1 | R2
    <R1 = any, R2 = any>(f: (obj: T) => R1, g: (obj: T) => R2, data: T): R1 | R2
  }
  <T = any, R1 = any>(p: (obj: T) => boolean, f: (obj: T) => R1): {
    <R2 = any>(g: (obj: T) => R2): (data: T) => R1 | R2
    <R2 = any>(g: (obj: T) => R2, data: T): R1 | R2
  }
  <T = any, R1 = any, R2 = any>(p: (obj: T) => boolean, f: (obj: T) => R1, g: (obj: T) => R2): (data: T) => R1 | R2
  <T = any, R1 = any, R2 = any>(p: (obj: T) => boolean, f: (obj: T) => R1, g: (obj: T) => R2, data: T): R1 | R2
}} */ (_curry4(branch))
