import identical from '../function/identical'
import type from '../function/type'
import and from '../function/and'
import difference from '../array/difference'

const isComplex = a => Array.isArray(a) || Object.prototype.toString.call(a) === '[object Object]'

const equal = (a, b) => {
  const aTy = type(a)
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  const regVals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode']

  const methods = {
    Date: (x, y) => x.valueOf() === y.valueOf(),
    RegExp: (x, y) => regVals.every(p => x[p] === y[p])
  }
  const current = methods[aTy]

  if (identical(a, b)) {
    return true
  }

  if (current) {
    return current(a, b)
  }

  if (!and(aKeys.length === bKeys.length, !difference(aKeys, bKeys).length)) {
    return false
  }

  if (isComplex(a)) {
    return aKeys.every(key => {
      const aVal = a[key]
      const bVal = b[key]

      if (isComplex(aVal)) {
        return equal(aVal, bVal)
      }

      return identical(aVal, bVal)
    })
  }

  return false
}

export default equal
