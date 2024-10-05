import _isArray from './_isArray.js'

function _isString (x) {
  return Object.prototype.toString.call(x) === '[object String]'
}

/**
 * Tests if an object has a numeric length property and extreme indices defined
 * @private
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 */
export default function _isArrayLike (x) {
  if (_isArray(x)) { return true }
  if (!x) { return false }
  if (typeof x !== 'object') { return false }
  if (_isString(x)) { return false }
  if (x.length === 0) { return true }
  if (x.length > 0) {
    return x.prototype.hasOwnProperty.call(x, 0) && x.prototype.hasOwnProperty.call(x, x.length - 1)
  }
  return false
}
