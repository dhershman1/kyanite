// import arrEq from './array-equals'
import identical from '../function/identical'
// import objEq from './object-equal'
import type from '../function/type'
import and from '../function/and'
import difference from '../array/difference'
import has from '../object/has'
import isObject from './isObject'
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

const _eq = (a, b) => {
  const aTy = type(a)
  const regVals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode']

  const methods = {
    Date: (x, y) => x.valueOf() === y.valueOf(),
    RegExp: (x, y) => regVals.every(p => x[p] === y[p])
  }
  const [c, d] = organize(a, b)
  const current = methods[aTy]

  if (current) {
    return current(a, b)
  }

  if (!keysCheck(c, d)) {
    return false
  }

  if (Array.isArray(c) || isObject(c)) {
    return Object.keys(c).every(key => {
      if (!has(key, d)) {
        return false
      }

      const aVal = c[key]
      const bVal = d[key]

      if (Array.isArray(aVal) || isObject(aVal)) {
        return _eq(aVal, bVal)
      }

      return identical(aVal, bVal)
    })
  }

  return identical(c, d)
}

// const equal = (a, b) => {
//   const aTy = type(a)
//   const regVals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode']
//   const methods = {
//     Object: objEq,
//     Array: arrEq,
//     Date: (x, y) => x.valueOf() === y.valueOf(),
//     RegExp: (x, y) => regVals.every(p => x[p] === y[p])
//   }

//   const current = methods[aTy]

//   if (current) {
//     return current(a, b)
//   }

//   return identical(a, b)
// }

export default _eq
