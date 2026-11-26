/**
 * Checks if every item of a sits in list starting at the offset, comparing with SameValueZero
 * (the same equality as includes and Set, so NaN matches NaN and objects match by reference)
 * @private
 * @param {ArrayLike<any>} a The items to look for
 * @param {ArrayLike<any>} list The list to look in
 * @param {number} offset Where in list a should start
 * @return {boolean} If a is found in list at the offset
 */
export default function _matchesAt (a, list, offset) {
  if (offset < 0 || offset + a.length > list.length) {
    return false
  }

  for (let i = 0; i < a.length; i++) {
    const x = a[i]
    const y = list[offset + i]

    // x !== x is only true for NaN
    if (x !== y && !(x !== x && y !== y)) { // eslint-disable-line no-self-compare
      return false
    }
  }

  return true
}
