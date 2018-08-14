import and from '../function/and'
import arrEq from './array-equals'
import difference from '../array/difference'
import has from '../object/has'
import isObject from './isObject'

const keysCheck = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  return and(aKeys.length === bKeys.length, !difference(aKeys, bKeys).length)
}

const equal = (a, b) => {
  if (!keysCheck(a, b)) {
    return false
  }

  const aKeys = Object.keys(a)

  return aKeys.every(key => {
    if (!has(key, b)) {
      return false
    }

    const aVal = a[key]
    const bVal = b[key]

    if (isObject(aVal)) {
      return equal(aVal, bVal)
    }

    if (Array.isArray(aVal)) {
      return arrEq(aVal, bVal)
    }

    return aVal === bVal
  })
}

export default equal
