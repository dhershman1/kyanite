import arrayFromIterator from './array-from-iterator'
import identical from '../identical'

const nullTypeCheck = (a, b) =>
  a === null ||
  b === null ||
  Object.prototype.toString.call(a).slice(8, -1) !== Object.prototype.toString.call(b).slice(8, -1)

// Contain the bulk of basic regex logic
const regexCheck = (a, b) => {
  const vals = ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode']

  for (let i = 0; i < vals.length; i++) {
    const p = vals[i]

    if (a[p] !== b[p]) {
      return false
    }
  }

  return true
}

// Try to simplify our switch with a function narrowing down our options
const typeConvert = a => {
  const allTypes = {
    complex: ['Arguments', 'Array', 'Object'],
    simple: ['Boolean', 'Number', 'String'],
    date: ['Date'],
    err: ['Error'],
    regex: ['RegExp'],
    map: ['Map', 'Set'],
    other: ['Int8Array', 'Uint8Array', 'Uint8ClampedArray',
      'Int16Array', 'Uint16Array', 'Int32Array',
      'Uint32Array', 'Float32Array', 'Float64Array', 'ArrayBuffer']
  }

  for (const prop in allTypes) {
    const currType = allTypes[prop]

    if (currType.indexOf(a) !== -1) {
      return prop
    }
  }

  return ''
}

// The vast functionality of the extremely strict equals functionality
const equal = (a, b, stackA, stackB) => {
  const aType = typeConvert(Object.prototype.toString.call(a).slice(8, -1))

  if (identical(a, b)) {
    return true
  }

  if (nullTypeCheck(a, b)) {
    return false
  }

  // Using the types certain logic should be called and addressed
  switch (aType) {
    case 'complex':
      break
    case 'simple':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false
      }
      break
    case 'date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false
      }
      break
    case 'err':
      return a.name === b.name && a.message === b.message
    case 'regex':
      if (!regexCheck(a, b)) {
        return false
      }
      break
    case 'map':
      if (!equal(arrayFromIterator(a.entries()), arrayFromIterator(b.entries()), stackA, stackB)) {
        return false
      }
      break
    case 'other':
      break
    default:
      return false
  }

  const keysA = Object.keys(a)

  if (keysA.length !== Object.keys(b).length) {
    return false
  }

  let idx = stackA.length - 1
  let idy = keysA.length - 1

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b
    }
    idx -= 1
  }

  stackA.push(a)
  stackB.push(b)

  while (idy >= 0) {
    const key = keysA[idy]

    if (!(Object.prototype.hasOwnProperty.call(b, key) && equal(b[key], a[key], stackA, stackB))) {
      return false
    }
    idy -= 1
  }
  stackA.pop()
  stackB.pop()

  return true
}

export default equal
