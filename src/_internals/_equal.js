import identical from '../function/identical'
import type from '../function/type'
import and from '../function/and'
import difference from '../array/difference'
import sort from '../array/sort'

const organize = (a, b) => {
  const s = sort((x, y) => x - y)

  if (Array.isArray(a)) {
    return [s(a), s(b)]
  }

  return [a, b]
}

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

  const [c, d] = organize(a, b)

  if (!keysCheck(c, d)) {
    return false
  }

  if (isComplex(c)) {
    return Object.keys(c).every(key => {
      const aVal = c[key]
      const bVal = d[key]

      if (isComplex(aVal)) {
        return equal(aVal, bVal)
      }

      return identical(aVal, bVal)
    })
  }

  return identical(c, d)
}

export default equal
