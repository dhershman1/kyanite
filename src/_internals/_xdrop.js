import _xfBase from './_xfBase.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for drop, it skips the first n values and passes along the rest
 * It counts as it goes, a fresh transformer (and count) is made every time transduce runs
 * @private
 * @param {number} n How many values to skip
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The drop transformer
 */
export default function _xdrop (n, xf) {
  let left = n

  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => {
      if (left > 0) {
        left -= 1

        return acc
      }

      return xf['@@transducer/step'](acc, x)
    }
  }
}
