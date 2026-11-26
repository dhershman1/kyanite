import _isTransformer from './_isTransformer.js'
/** @import { Transformer } from './_types.js' */

/**
 * The internal reduce, it iterates any iterable and stops early on a reduced value
 * A plain reducer is called directly with (value, acc), a transformer (from transduce) is driven
 * through the transducer protocol: step(acc, value) for each value, then result(acc) at the end
 * @private
 * @param {((value: any, acc: any) => any) | Transformer} fn The reducer, or a transformer
 * @param {any} acc The starting accumulator
 * @param {Iterable<any>} list The iterable to reduce
 * @return {any} The reduced result
 */
const _reduce = (fn, acc, list) => {
  if (!_isTransformer(fn)) {
    const reducer = /** @type {(value: any, acc: any) => any} */ (fn)

    for (const entry of list) {
      acc = reducer(entry, acc)

      if (acc && acc['@@transducer/reduced']) {
        return acc['@@transducer/value']
      }
    }

    return acc
  }

  const xf = /** @type {Transformer} */ (fn)

  for (const entry of list) {
    acc = xf['@@transducer/step'](acc, entry)

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value']
      break
    }
  }

  return xf['@@transducer/result'](acc)
}

export default _reduce
