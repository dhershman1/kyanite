import _curry2 from '../_internals/_curry2'
import eq from './eq'
import type from './type'

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

const _uniqContentEquals = (aIterator, bIterator, stackA, stackB) => {
  var a = _arrFromIter(aIterator)
  var b = _arrFromIter(bIterator)

  function _eq (_a, _b) {
    return deepEq(_a, _b, stackA.slice(), stackB.slice())
  }

  // if *a* array contains any element that is not included in *b*
  return !_containsWith(function (b, aItem) {
    return !_containsWith(_eq, aItem, b)
  }, b, a)
}

/**
 * @name deepEq
 * @function
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> Boolean
 * @description Takes and compares two items. Capable of handling cyclical data structures
 * @param {Any} a First item to compare
 * @param {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 *
 * @example
 * import { deepEq } from 'kyanite'
 *
 * const q = { a: 1 }
 *
 * deepEq({ a: 1 }, { a: 1 }) // => true
 * deepEq({ a: 1, b: 2 }, { b: 2, a: 1 }) // => true
 * deepEq(/[A-Z]/, new RegExp('[A-Z]') // => true
 * deepEq([1, 2], [1, 2]) // => true
 * deepEq(new Date(), new Date()) // => true
 * deepEq({ a: { q } }, { a: { q } }) // => true
 *
 * deepEq('test', new String('test')) // => false
 * deepEq(false, new Boolean(false)) // => false
 * deepEq(5, new Number(5)) // => false
 * deepEq([1, 2], [2, 1]) // => false
 * deepEq({ a: 1 }, { b: 1 }) // => false
 * deepEq(new Date('11/14/1992'), new Date('11/14/2018')) // => false
 * deepEq([], {}) // => false
 */
const deepEq = (a, b, stackA = [], stackB = []) => {
  if (eq(a, b)) {
    return true
  }

  const aType = type(a)

  if (aType !== type(b) || a == null || b == null) {
    return false
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
      typeof b.equals === 'function' && b.equals(a)
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

    if (!(Object.prototype.hasOwnProperty.call(b, key) && deepEq(b[key], a[key], extendedStackA, extendedStackB))) {
      return false
    }
  }

  return true
}

export default _curry2(deepEq)
