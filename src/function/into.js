import _curry3 from '../_internals/_curry3.js'
import _appendǃ from '../_internals/_appendǃ.js'
import _assocǃ from '../_internals/_assocǃ.js'
import transduce from './transduce.js'
import type from './type.js'
/** @import { Transducer } from '../_internals/_types.js' */

/**
 * Collects into a copy of the starting value, so the steps can safely add to it in place
 * @private
 * @param {any} acc The starting value
 * @return {[(value: any, acc: any) => any, any]} The reducer and the accumulator to start with
 */
const collector = acc => {
  const kind = type(acc)

  switch (kind) {
    case 'Array':
      return [(x, xs) => _appendǃ(xs, x), [...acc]]
    case 'String':
      return [(x, str) => str + x, acc]
    case 'Object':
      return [([k, v], obj) => _assocǃ(obj, k, v), { ...acc }]
    default:
      throw new TypeError(`Unsupported type: ${kind}`)
  }
}

/**
 * @private
 * @type {(acc: any, xf: Transducer | ReadonlyArray<Transducer>, list: Iterable<any>) => any}
 */
const into = (acc, xf, list) => {
  const [fn, start] = collector(acc)

  return transduce(xf, fn, start, list)
}

/**
 * @name into
 * @function
 * @since v4.0.0
 * @category Function
 * @sig a -> [(Transformer -> Transformer)] -> [b] -> a
 * @description
 * Runs a list through a chain of transducers like `transduce`, and collects the results into the type of the starting value, so you don't have to write a reducer
 * - An array gets each value added to the end
 * - A string gets each value joined on to the end
 * - An object expects each value to be a `[key, value]` pair, and sets it
 *
 * The starting value is copied first, it's never changed. Any other type throws a TypeError
 * @param {Array|String|Object} acc The value to collect into
 * @param {Array|Function} xf The transducers to run each value through, in order
 * @param {Iterable} list The list (or any iterable) to run through
 * @return {Array|String|Object} A new value of the same type as acc, holding the results
 *
 * @example
 * import { filter, into, map, take } from 'kyanite'
 *
 * into([], [map(n => n + 1), filter(n => n % 2 === 0)], [1, 2, 3, 4]) // => [2, 4]
 * into([0], [take(2)], [1, 2, 3]) // => [0, 1, 2]
 * into('', [map(c => c.toUpperCase()), take(3)], 'kyanite') // => 'KYA'
 * into({}, [map(user => [user.id, user.name])], [{ id: 1, name: 'Abby' }, { id: 2, name: 'Brad' }]) // => { 1: 'Abby', 2: 'Brad' }
 *
 * // It's also curried
 * const firstTwo = into([], [take(2)])
 *
 * firstTwo(new Set([5, 10, 15])) // => [5, 10]
 */
export default /** @type {{
  (acc: string): {
    (xf: Transducer | ReadonlyArray<Transducer>): (list: Iterable<any>) => string
    (xf: Transducer | ReadonlyArray<Transducer>, list: Iterable<any>): string
  }
  <T = any>(acc: ReadonlyArray<NoInfer<T>>): {
    (xf: Transducer | ReadonlyArray<Transducer>): (list: Iterable<any>) => T[]
    (xf: Transducer | ReadonlyArray<Transducer>, list: Iterable<any>): T[]
  }
  <T = any>(acc: { readonly [key: string]: NoInfer<T> }): {
    (xf: Transducer | ReadonlyArray<Transducer>): (list: Iterable<any>) => { [key: string]: T }
    (xf: Transducer | ReadonlyArray<Transducer>, list: Iterable<any>): { [key: string]: T }
  }
  (acc: string, xf: Transducer | ReadonlyArray<Transducer>): (list: Iterable<any>) => string
  <T = any>(acc: ReadonlyArray<NoInfer<T>>, xf: Transducer | ReadonlyArray<Transducer>): (list: Iterable<any>) => T[]
  <T = any>(acc: { readonly [key: string]: NoInfer<T> }, xf: Transducer | ReadonlyArray<Transducer>): (list: Iterable<any>) => { [key: string]: T }
  (acc: string, xf: Transducer | ReadonlyArray<Transducer>, list: Iterable<any>): string
  <T = any>(acc: ReadonlyArray<NoInfer<T>>, xf: Transducer | ReadonlyArray<Transducer>, list: Iterable<any>): T[]
  <T = any>(acc: { readonly [key: string]: NoInfer<T> }, xf: Transducer | ReadonlyArray<Transducer>, list: Iterable<any>): { [key: string]: T }
}} */ (_curry3(into))
