/** @import { Transformer } from './_types.js' */

/**
 * Checks if a value follows the transducer protocol
 * @private
 * @param {any} x The value to check
 * @return {x is Transformer} If x is a transformer
 */
export default function _isTransformer (x) {
  return x != null && typeof x['@@transducer/step'] === 'function'
}
