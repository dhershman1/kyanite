import _isArrayLike from './_isArrayLike.js'
import _isTransformer from './_isTransformer.js'
import amend from '../object/amend.js'
import identity from '../function/identity.js'
import objOf from '../object/objOf.js'

const _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x)
    return xs
  },
  '@@transducer/result': identity
}
const _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) { return a + b },
  '@@transducer/result': identity
}
const _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return amend(
      result,
      _isArrayLike(input) ? objOf(input[0], input[1]) : input
    )
  },
  '@@transducer/result': identity
}

export default function _stepCat (obj) {
  if (_isTransformer(obj)) {
    return obj
  }
  if (_isArrayLike(obj)) {
    return _stepCatArray
  }
  if (typeof obj === 'string') {
    return _stepCatString
  }
  if (typeof obj === 'object') {
    return _stepCatObject
  }
  throw new Error('Cannot create transformer for ' + obj)
}
