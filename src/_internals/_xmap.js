import _xfBase from './_xfBase.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for map, each value is changed by fn before it's passed along
 * @private
 * @param {(x: any) => any} fn The function to change each value with
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The map transformer
 */
export default function _xmap (fn, xf) {
  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => xf['@@transducer/step'](acc, fn(x))
  }
}
