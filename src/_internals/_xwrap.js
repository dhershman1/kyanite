/**
 * A transformer wrapper for transducers
 * @private
 * @param {Function} fn The function to wrap
 * @return {Object} The wrapped function
 */
const _xwrap = fn => ({
  '@@transducer/result': acc => acc,
  '@@transducer/step': fn
})

export default _xwrap
