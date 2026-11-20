import _xwrap from './_xwrap.js'

/**
 * The internal reduce, it iterates any iterable and stops early on a reduced value
 * @private
 * @param {(value: any, acc: any) => any} fn The reducer, called with the value and the accumulator
 * @param {any} acc The starting accumulator
 * @param {Iterable<any>} list The iterable to reduce
 * @return {any} The reduced result
 */
const _reduce = (fn, acc, list) => {
  const xf = _xwrap(fn)

  for (const entry of list) {
    acc = xf['@@transducer/step'](entry, acc)

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value']
      break
    }
  }

  return xf['@@transducer/result'](acc)
}

export default _reduce
