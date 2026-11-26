import _xfBase from './_xfBase.js'
import _reduced from './_reduced.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for take, it passes along the first n values then stops the reduce early with reduced
 * It counts as it goes, a fresh transformer (and count) is made every time transduce runs
 * @private
 * @param {number} n How many values to take
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The take transformer
 */
export default function _xtake (n, xf) {
  let left = n

  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => {
      left -= 1

      if (left > 0) {
        return xf['@@transducer/step'](acc, x)
      }

      // The last value is passed along before stopping, asking for 0 (or less) stops without it
      return _reduced(left === 0 ? xf['@@transducer/step'](acc, x) : acc)
    }
  }
}
