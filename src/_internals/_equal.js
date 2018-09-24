import identical from '../function/identical'
import type from '../function/type'
import and from '../function/and'
import difference from '../array/difference'

const keysCheck = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  return and(aKeys.length === bKeys.length, !difference(aKeys, bKeys).length)
}

const isComplex = a => Array.isArray(a) || Object.prototype.toString.call(a) === '[object Object]'

const equal = (a, b) => {
  const aTy = type(a)
  const regVals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode']

  const methods = {
    Date: (x, y) => x.valueOf() === y.valueOf(),
    RegExp: (x, y) => regVals.every(p => x[p] === y[p])
  }
  const current = methods[aTy]

  if (current) {
    return current(a, b)
  }

  if (!keysCheck(a, b)) {
    return false
  }

  if (isComplex(a)) {
    return Object.keys(a).every(key => {
      const aVal = a[key]
      const bVal = b[key]

      if (isComplex(aVal)) {
        return equal(aVal, bVal)
      }

      return identical(aVal, bVal)
    })
  }

  return identical(a, b)
}

export default equal
