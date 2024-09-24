/**
 * A transformer wrapper for transducers
 * @private
 * @param {Function} fn The function to wrap
 * @return {Object} The wrapped function
 */
export default function _xwrap (fn) {
  return {
    '@@transducer/init': () => { throw new Error('init not implemented on XWrap') },
    '@@transducer/result': acc => acc,
    '@@transducer/step': (acc, x) => fn(acc, x)
  }
}
