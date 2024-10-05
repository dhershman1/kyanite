/**
 * Check if a value is an array
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 */
export default Array.isArray || function _isArray (val) {
  return (val != null &&
    val.length >= 0 &&
    Object.prototype.toString.call(val) === '[object Array]')
}
