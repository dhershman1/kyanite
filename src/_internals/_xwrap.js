/** @import { Transformer } from './_types.js' */

/**
 * Wraps one of Kyanite's reducers as a transformer, so it can sit at the end of a transducer chain
 * Kyanite's reducers take the value first and the accumulator second, the transducer protocol's
 * step takes the accumulator first, so the wrapper swaps them
 * @private
 * @param {(value: any, acc: any) => any} fn The reducer to wrap
 * @return {Transformer} The reducer as a transformer
 */
export default function _xwrap (fn) {
  return {
    '@@transducer/init': () => {
      throw new Error('Kyanite reducers have no starting value of their own, pass one to transduce')
    },
    '@@transducer/step': (acc, value) => fn(value, acc),
    '@@transducer/result': acc => acc
  }
}
