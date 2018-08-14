import isObject from './isObject'
import objEq from './object-equal'
import sort from '../array/sort'

const equal = (a, b) => {
  const s = sort((a, b) => a - b)

  if (a.length !== b.length) {
    return false
  }

  const aSorted = s(a)
  const bSorted = s(b)

  return aSorted.every((val, i) => {
    const bVal = bSorted[i]

    if (Array.isArray(val)) {
      return equal(val, bVal)
    }

    if (isObject(val)) {
      return objEq(val, bVal)
    }

    return val === bVal
  })
}

export default equal
