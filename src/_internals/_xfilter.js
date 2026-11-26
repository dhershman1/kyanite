import _xfBase from './_xfBase.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for filter, only values that pass fn are passed along
 * @private
 * @param {(x: any) => boolean} fn The predicate each value has to pass
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The filter transformer
 */
export default function _xfilter (fn, xf) {
  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => fn(x) ? xf['@@transducer/step'](acc, x) : acc
  }
}
