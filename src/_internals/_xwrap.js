/**
 * A transformer wrapper for transducers
 * @private
 * @param {Function} fn The function to wrap
 * @return {Object} The wrapped function
 */
function XWrap (fn) {
  this.f = fn
}

XWrap.prototype['@@transducer/init'] = function () {
  throw new Error('init not implemented on XWrap')
}
XWrap.prototype['@@transducer/result'] = function (acc) { return acc }
XWrap.prototype['@@transducer/step'] = function (acc, x) {
  return this.f(acc, x)
}

export default function _xwrap (fn) {
  return new XWrap(fn)
}

// export default function _xwrap (fn) {
//   return {
//     '@@transducer/init': () => { throw new Error('init not implemented on XWrap') },
//     '@@transducer/result': acc => acc,
//     '@@transducer/step': (acc, x) => fn(acc, x)
//   }
// }
