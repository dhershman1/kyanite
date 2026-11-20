/**
 * Wraps a value to signal a reduce should stop early, values that are already reduced are returned as is
 * @private
 * @param {any} x The value to wrap
 * @return {any} The reduced value
 */
const reduced = x =>
  x && x['@@transducer/reduced']
    ? x
    : {
        '@@transducer/value': x,
        '@@transducer/reduced': true
      }

export default reduced
