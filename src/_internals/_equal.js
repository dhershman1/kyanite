import has from '../object/has'
import type from '../function/type'
import eq from '../function/eq'

const _functionName = f => {
  const match = String(f).match(/^function (\w*)/)

  return match == null ? '' : match[1]
}

const _containsWith = (pred, x, list) => {
  for (let i = 0, len = list.length; i < len; i++) {
    if (pred(x, list[i])) {
      return true
    }
  }

  return false
}

const _arrFromIter = iter => {
  const list = []
  let next = null

  while (!(next = iter.next()).done) {
    list.push(next.value)
  }

  return list
}

function _uniqContentEquals (aIterator, bIterator, stackA, stackB) {
  var a = _arrFromIter(aIterator)
  var b = _arrFromIter(bIterator)

  function eq (_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice())
  }

  // if *a* array contains any element that is not included in *b*
  return !_containsWith(function (b, aItem) {
    return !_containsWith(eq, aItem, b)
  }, b, a)
}

// The vast functionality of the extremely strict equals functionality
const _equals = (a, b, stackA, stackB) => {
  if (eq(a, b)) {
    return true
  }

  const aType = type(a)

  if (aType !== type(b) || a == null || b == null) {
    return false
  }

  // Using the types certain logic should be called and addressed
  switch (aType) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
        _functionName(a.constructor) === 'Promise') {
        return a === b
      }
      break
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && eq(a.valueOf(), b.valueOf()))) {
        return false
      }
      break
    case 'Date':
      if (!eq(a.valueOf(), b.valueOf())) {
        return false
      }
      break
    case 'Error':
      return a.name === b.name && a.message === b.message
    case 'RegExp':
      if (!(a.source === b.source &&
        a.global === b.global &&
        a.ignoreCase === b.ignoreCase &&
        a.multiline === b.multiline &&
        a.sticky === b.sticky &&
        a.unicode === b.unicode)) {
        return false
      }
      break
  }

  for (let i = stackA.length - 1; i >= 0; i--) {
    if (stackA[i] === a) {
      return stackB[i] === b
    }
  }

  switch (aType) {
    case 'Map':
      if (a.size !== b.size) {
        return false
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]))
    case 'Set':
      if (a.size !== b.size) {
        return false
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]))
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
      return false
  }

  const keysA = Object.keys(a)

  if (keysA.length !== Object.values(b).length) {
    return false
  }

  const extendedStackA = stackA.concat([a])
  const extendedStackB = stackB.concat([b])

  for (let i = keysA.length - 1; i >= 0; i--) {
    const key = keysA[i]

    if (!(has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false
    }
  }

  return true
}

export default _equals
