import _xfBase from './_xfBase.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for uniqBy, only the first value for each result of fn is passed along
 * The values it has seen are kept per run, a fresh transformer (and Set) is made every time transduce runs
 * @private
 * @param {(x: any) => any} fn The function that decides what makes a value unique
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The uniqBy transformer
 */
export default function _xuniqBy (fn, xf) {
  const seen = new Set()

  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => {
      const k = fn(x)

      if (seen.has(k)) {
        return acc
      }

      seen.add(k)

      return xf['@@transducer/step'](acc, x)
    }
  }
}
