import _assocǃ from '../_internals/_assocǃ.js'
import _curry2 from '../_internals/_curry2.js'
import _dispatchable from '../_internals/_dispatchable.js'
import _xmap from '../_internals/_xmap.js'
import curryN from '../function/curryN.js'

function _map (fn, list) {
  let idx = 0
  const len = list.length
  const result = Array(len)

  while (idx < len) {
    _assocǃ(result, idx, fn(list[idx]))
    idx += 1
  }

  return result
}

/**
 * @name map
 * @function
 * @since v0.1.0
 * @category Array
 * @sig (a -> b) -> [a] -> [b]
 * @description
 * Takes a function and applies it to all of the values within the provided list,
 * and brings back a new list of the same type.
 * @param {Function} fn The function to run against the values in our functor
 * @param {Array} list The list to iterate through
 * @return {Array} The new Array or Object that was created
 *
 * @example
 * import { map } from 'kyanite'
 *
 * const dbl = n => n * 2
 *
 * map(dbl, [1, 2, 3]) // => [2, 4, 6]
 *
 * // It's also curried
 *
 * const dbler = map(dbl)
 *
 * dbler([1, 2, 3]) // => [2, 4, 6]
 */
const map = (fn, functor) => {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments))
      })
    default:
      return _map(fn, functor)
  }
}

export default _curry2(_dispatchable(['map'], _xmap, map))
