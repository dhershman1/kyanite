/* eslint-disable no-self-compare */
import _arrFromIter from './_arrFromIter'
import has from '../object/has'
import type from '../function/type'

const containsWith = (pred, x, list) => {
  var idx = 0
  var len = list.length

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true
    }
    idx += 1
  }
  return false
}

const uniqContentEquals = (aIterator, bIterator, stackA, stackB, eqFn) => {
  var a = _arrFromIter(aIterator)
  var b = _arrFromIter(bIterator)

  function eq (_a, _b) {
    return eqFn(_a, _b, stackA.slice(), stackB.slice())
  }

  // if *a* array contains any element that is not included in *b*
  return !containsWith(function (b, aItem) {
    return !containsWith(eq, aItem, b)
  }, b, a)
}

const _deepEq = (a, b, stackA, stackB, eqFn) => {
  const aTag = type(a)
  const bTag = type(b)
  const SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null

  if (aTag !== bTag) {
    return false
  }

  switch (aTag) {
    case 'RegExp':
    case 'String':
      // Primitives and their corresponding object wrappers are equivalent
      // Meaning that '5' is equal to new String('5')
      return '' + a === '' + b
    case 'Number':
      // NaN are equivalent but not reflexive
      if (+a !== +a) {
        return +b !== +b
      }

      // An egal comparison performed for other numerics
      return +a === 0 ? 1 / +a === 1 / b : +a === +b
    case 'Date':
    case 'Boolean':
      return +a === +b
    case 'Symbol':
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b)
  }

  let idx = stackA.length

  while (idx--) {
    if (stackA[idx] === a) {
      return stackB[idx] === b
    }
  }

  switch (aTag) {
    case 'Map':
      if (a.size !== b.size) {
        return false
      }

      return uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]), eqFn)
    case 'Set':
      if (a.size !== b.size) {
        return false
      }

      return uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]), eqFn)
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break
    default:
      // Values of other types are only equal if identical.
      return false
  }

  const keysA = Object.keys(a)

  if (keysA.length !== Object.keys(b).length) {
    return false
  }

  idx = keysA.length

  while (idx--) {
    const key = keysA[idx]

    if (!(has(key, b) && eqFn(b[key], a[key], stackA.concat([a]), stackB.concat([b])))) {
      return false
    }
  }

  return true
}

const equal = (a, b, stackA, stackB) => {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b
  }
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) {
    return false
  }
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) {
    return b !== b
  }

  return _deepEq(a, b, stackA, stackB, equal)
}

export default equal
