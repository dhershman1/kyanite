/**
 * Returns true if the specified value is equal,
 * to at least one element of the given list; false otherwise.
 * @private
 * @category Function
 * @param {Function} pred The predicate function
 * @param {Any} x The value to compare
 * @param {Array} list The list to compare against
 * @returns {Boolean} Whether or not the value is in the list
 */
export default function _includesWith (pred, x, list) {
  let idx = -1
  const len = list.length

  while (++idx < len) {
    if (pred(x, list[idx])) {
      return true
    }
  }

  return false
}
