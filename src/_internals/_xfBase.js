/** @import { Transformer } from './_types.js' */

/**
 * The init and result every transformer passes straight through to the next one in the chain
 * Spread it into a transformer and add a step
 * @private
 * @param {Transformer} xf The next transformer in the chain
 * @return {Omit<Transformer, '@@transducer/step'>} The pass through init and result
 */
export default function _xfBase (xf) {
  return {
    '@@transducer/init': () => xf['@@transducer/init'](),
    '@@transducer/result': acc => xf['@@transducer/result'](acc)
  }
}
