import _xfBase from './_xfBase.js'
import _includesWith from './_includesWith.js'

export default function _xuniqBy (pred, xf) {
  const items = []

  return {
    '@@transducer/init': _xfBase.init,
    '@@transducer/result': _xfBase.result,
    '@@transducer/step': (result, input) => {
      if (_includesWith(pred, input, result)) {
        return result
      }

      items.push(input)

      return xf['@@transducer/step'](result, input)
    }
  }
}
