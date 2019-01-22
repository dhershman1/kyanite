import _curry3 from '../_internals/_curry3'
import _xwrap from '../_internals/_xwrap'

function _reduceIterable (xf, acc, iter) {
  for (const entry of iter) {
    acc = xf['@@transducer/step'](entry, acc)

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value']
      break
    }
  }

  return xf['@@transducer/result'](acc)
}

/**
 * @name reduce
 * @function
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> b) -> b -> Array a -> b
 * @description
 * Accepts an array and runs a reduce based on the passed values
 * The reducer function accepts the params a bit differently than the vanilla counterpart
 * As the reducer should expect the value first, and the accumulator second
 * @param {Function} fn The function to run with the reduce should expect the value first and the accumulator second: (a, acc) => {}
 * @param {Any} acc The empty initial state of the reduce accumulator
 * @param {Iterable} list The list to run our reduce against
 * @return {Any} Returns based on the original init parameter that is passed in
 *
 * @example
 * import { reduce } from 'kyanite'
 *
 * reduce((n, acc) => acc + n, 0, [1, 2, 3, 4, 5]) // => 15
 * reduce((n, acc) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]) // => [1, 2, 3]
 */
const reduce = (fn, acc, list) => {
  const xf = _xwrap(fn)

  if (typeof list.next === 'function' || list[Symbol.iterator] != null) {
    return _reduceIterable(xf, acc, list)
  }

  for (let i = 0, len = list.length; i < len; i++) {
    acc = xf['@@transducer/step'](list[i], acc)

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value']
      break
    }
  }

  return xf['@@transducer/result'](acc)
}

export default _curry3(reduce)
