import _xfBase from './_xfBase.js'
import _reduced from './_reduced.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for takeWhile, values are passed along until one fails fn, then the reduce stops
 * @private
 * @param {(x: any) => boolean} fn The predicate each value has to pass
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The takeWhile transformer
 */
export default function _xtakeWhile (fn, xf) {
  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => fn(x) ? xf['@@transducer/step'](acc, x) : _reduced(acc)
  }
}
