import _curry4 from '../_internals/_curry4.js'
import _isTransformer from '../_internals/_isTransformer.js'
import _reduce from '../_internals/_reduce.js'
import _xwrap from '../_internals/_xwrap.js'
/** @import { Reduced, Transducer, Transformer } from '../_internals/_types.js' */

/**
 * @private
 * @type {<R = any>(
 *   xf: Transducer | ReadonlyArray<Transducer>,
 *   fn: ((value: any, acc: R) => R | Reduced<R>) | Transformer,
 *   acc: R,
 *   list: Iterable<any>
 * ) => R}
 */
const transduce = (xf, fn, acc, list) => {
  const reducer = _isTransformer(fn) ? fn : _xwrap(/** @type {(value: any, acc: any) => any} */ (fn))
  // Each transducer wraps the one after it, so building from the right leaves the first one on the
  // outside, where it sees every value first. Data flows through the list from left to right
  const xform = Array.isArray(xf)
    ? xf.reduceRight((next, t) => t(next), reducer)
    : /** @type {Transducer} */ (xf)(reducer)

  return _reduce(xform, acc, list)
}

/**
 * @name transduce
 * @function
 * @since v4.0.0
 * @category Function
 * @sig [(Transformer -> Transformer)] -> ((a, b) -> b) -> b -> [a] -> b
 * @description
 * Runs a list through a chain of transducers and a reducer in a single pass, without building a new list for each step
 *
 * A transducer is a list function like `map(fn)`, `filter(fn)`, or `take(n)` used with its list left off.
 * Instead of working on a whole list at once, each value goes through every transducer in order before the next value is looked at.
 * A value that `filter` drops never reaches the steps after it, and once `take` has enough the reduce stops, so the rest of the list is never touched
 *
 * The transducers are given as an array and run from first to last, like `pipe`. A single transducer can also be passed on its own.
 * The reducer works like the one you give `reduce`, it takes the value first and the accumulator second, and can stop early with `reduced`
 *
 * Kyanite follows the standard transducer protocol, so transducers and transformers from other libraries that follow it work here too
 * @param {Array|Function} xf The transducers to run each value through, in order
 * @param {Function} fn The reducer that collects the values that make it through: (value, acc) => acc
 * @param {Any} acc The starting value of the accumulator
 * @param {Iterable} list The list (or any iterable) to run through
 * @return {Any} The final accumulator
 *
 * @example
 * import { filter, map, take, transduce } from 'kyanite'
 *
 * const isEven = n => n % 2 === 0
 * const sum = (n, acc) => acc + n
 *
 * transduce([map(n => n + 1), filter(isEven)], sum, 0, [1, 2, 3, 4]) // => 6
 *
 * // Only the first 3 values that pass are ever doubled, the rest of the list is never looked at
 * transduce([filter(isEven), take(3), map(n => n * 2)], (n, acc) => acc.concat(n), [], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // => [4, 8, 12]
 *
 * // It works with any iterable, even a generator that never ends
 * function * naturals () {
 *   let n = 1
 *   while (true) yield n++
 * }
 *
 * transduce([filter(isEven), take(3)], sum, 0, naturals()) // => 12
 *
 * // It's also curried
 * const sumFirstTwo = transduce([take(2)], sum, 0)
 *
 * sumFirstTwo([5, 10, 15]) // => 15
 */
export default /** @type {{
  (xf: Transducer | ReadonlyArray<Transducer>): {
    <R = any>(fn: ((value: any, acc: R) => R | Reduced<R>) | Transformer): {
      (acc: R): (list: Iterable<any>) => R
      (acc: R, list: Iterable<any>): R
    }
    <R = any>(fn: ((value: any, acc: R) => R | Reduced<R>) | Transformer, acc: R): (list: Iterable<any>) => R
    <R = any>(fn: ((value: any, acc: R) => R | Reduced<R>) | Transformer, acc: R, list: Iterable<any>): R
  }
  <R = any>(xf: Transducer | ReadonlyArray<Transducer>, fn: ((value: any, acc: R) => R | Reduced<R>) | Transformer): {
    (acc: R): (list: Iterable<any>) => R
    (acc: R, list: Iterable<any>): R
  }
  <R = any>(xf: Transducer | ReadonlyArray<Transducer>, fn: ((value: any, acc: R) => R | Reduced<R>) | Transformer, acc: R): (list: Iterable<any>) => R
  <R = any>(xf: Transducer | ReadonlyArray<Transducer>, fn: ((value: any, acc: R) => R | Reduced<R>) | Transformer, acc: R, list: Iterable<any>): R
}} */ (_curry4(transduce))
