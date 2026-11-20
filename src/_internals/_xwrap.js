/**
 * A transformer wrapper for transducers
 * @private
 * @param {(a: any, b: any) => any} fn The function to wrap
 * @return {any} The wrapped function
 */
export default function _xwrap (fn) {
  return {
    '@@transducer/init': () => { throw new Error('init not implemented on XWrap') },
    '@@transducer/result': (/** @type {any} */ acc) => acc,
    '@@transducer/step': (/** @type {any} */ acc, /** @type {any} */ x) => fn(acc, x)
  }
}
