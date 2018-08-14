import has from '../object/has'

const circular = (a, b, stackA = [], stackB = []) => {
  const keys = Object.keys(a)
  let idx = stackA.length - 1
  let idy = keys.length - 1

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b
    }

    idx -= 1
  }

  stackA.push(a)
  stackB.push(b)

  while (idy >= 0) {
    const currKey = keys[idy]

    if (!(has(currKey, b) && circular(b[currKey], a[currKey], stackA, stackB))) {
      return false
    }

    idy -= 1
  }

  stackA.pop()
  stackB.pop()

  return true
}

export default circular
