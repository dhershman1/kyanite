import and from '../function/and'
import difference from '../array/difference'
import eq from '../function/eq'
import type from '../function/type'

const isComplex = a => Array.isArray(a) || Object.prototype.toString.call(a) === '[object Object]'

const checkSet = (a, b) => {
  if (and(a.constructor === Set, b.constructor === Set)) {
    return [[...a], [...b]]
  }

  return [a, b]
}

const equal = (a, b) => {
  const [convA, convB] = checkSet(a, b)
  const aTy = type(convA)
  const aKeys = Object.keys(convA)
  const bKeys = Object.keys(convB)
  const regVals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode']

  const methods = {
    Date: (x, y) => x.valueOf() === y.valueOf(),
    RegExp: (x, y) => regVals.every(p => x[p] === y[p])
  }
  const current = methods[aTy]

  if (eq(convA, convB)) {
    return true
  }

  if (current) {
    return current(convA, convB)
  }

  if (!and(aKeys.length === bKeys.length, !difference(aKeys, bKeys).length)) {
    return false
  }

  if (isComplex(convA)) {
    return aKeys.every(key => {
      const aVal = convA[key]
      const bVal = convB[key]

      if (isComplex(aVal)) {
        return equal(aVal, bVal)
      }

      return eq(aVal, bVal)
    })
  }

  return false
}

export default equal
