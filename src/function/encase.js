import _curry2 from '../_internals/_curry2'

/**
 * @name encase
 * @function
 * @since v0.2.2
 * @category Function
 * @sig Function -> Any -> Maybe
 * @description Encase the provided function in a try catch which if the function errors will give back an undefined
 * @param {Function} fn The function to encase before running
 * @param {Any} a The value we want to pass into the given function
 * @return {Any} The return of the provided function or undefined if it errors
 *
 * @example
 * import { encase } from 'kyanite'
 *
 * encase(x => x.a.b.c, {a: 0}) // => undefined
 * encase(x => x.a.b.c, {a: {b: {c: 0}}}) // => 0
 *
 * // It's also curried
 * const getter = x => x.a.b.c
 * const en = encase(getter)
 *
 * en({a: 0}) // => undefined
 * en(a: {b: {c: 0}}}) // => 0
 */
const encase = (fn, a) => {
  try {
    return fn(a)
  } catch (err) {
    return undefined
  }
}

export default _curry2(encase)
