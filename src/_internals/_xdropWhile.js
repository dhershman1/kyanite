import _xfBase from './_xfBase.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for dropWhile, it skips values until one fails fn, then passes along that value and every one after it
 * @private
 * @param {(x: any) => boolean} fn The predicate to keep skipping on
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The dropWhile transformer
 */
export default function _xdropWhile (fn, xf) {
  let dropping = true

  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => {
      if (dropping && fn(x)) {
        return acc
      }

      dropping = false

      return xf['@@transducer/step'](acc, x)
    }
  }
}
