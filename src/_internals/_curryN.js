export default function _curryN (length, recieved, fn) {
  return function () {
    const combined = []
    let argsIdx = 0
    let combinedIdx = 0
    let left = length

    while (combinedIdx < recieved.length || argsIdx < arguments.length) {
      let result

      if (combinedIdx < recieved.length || argsIdx >= arguments.length) {
        result = recieved[combinedIdx]
      } else {
        result = arguments[argsIdx]
        argsIdx += 1
      }

      combined[combinedIdx] = result
      combinedIdx += 1
      left -= 1
    }

    if (left <= 0) {
      return fn.apply(this, combined)
    }

    return _curryN(left, combined, fn)
  }
}
