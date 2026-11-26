import _xfBase from './_xfBase.js'
/** @import { Transformer } from './_types.js' */

/**
 * The transformer for concatMap, each value is changed by fn and when that gives back an array
 * each of its items is passed along one at a time
 * @private
 * @param {(x: any) => any} fn The function to change each value with
 * @param {Transformer} xf The next transformer in the chain
 * @return {Transformer} The concatMap transformer
 */
export default function _xconcatMap (fn, xf) {
  const step = xf['@@transducer/step']

  return {
    ..._xfBase(xf),
    '@@transducer/step': (acc, x) => {
      const result = fn(x)

      if (!Array.isArray(result)) {
        return step(acc, result)
      }

      for (const item of result) {
        acc = step(acc, item)

        // A step further down (like take) can stop the reduce partway through the array
        if (acc && acc['@@transducer/reduced']) {
          return acc
        }
      }

      return acc
    }
  }
}
