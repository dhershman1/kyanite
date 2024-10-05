import _xfBase from './_xfBase.js'

/**
 * _xmap function that takes a function and a transducer and returns a new transducer
 * @private
 * @param {Function} fn The function to apply to each element
 * @param {Function} xf The transducer to apply
 * @returns {Object} A new transducer
 */
function XMap (f, xf) {
  this.xf = xf
  this.f = f
}

XMap.prototype['@@transducer/init'] = _xfBase.init
XMap.prototype['@@transducer/result'] = _xfBase.result
XMap.prototype['@@transducer/step'] = function (result, input) {
  return this.xf['@@transducer/step'](result, this.f(input))
}

export default function _xmap (f) {
  return function (xf) { return new XMap(f, xf) }
}
