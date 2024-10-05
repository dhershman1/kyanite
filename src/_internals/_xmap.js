/**
 * _xmap function that takes a function and a transducer and returns a new transducer
 * @private
 * @param {Function} fn The function to apply to each element
 * @param {Function} xf The transducer to apply
 * @returns {Object} A new transducer
 */
export default function _xmap (fn, xf) {
  return {
    '@@transducer/init': () => xf['@@transducer/init'](),
    '@@transducer/result': result => xf['@@transducer/result'](result),
    '@@transducer/step': (result, input) =>
      xf['@@transducer/step'](result, fn(input))
  }
}
