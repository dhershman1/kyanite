import _curry2 from './_curry2'
import _curry3 from './_curry3'

/**
 * This is an optimized internal curry function for 4 param functions
 * @private
 * @category Function
 * @param {Function} fn The function to curry
 * @return {Function} The curried function
 */
function _curry4 (fn) {
  return function f4 (a, b, c, d) {
    switch (arguments.length) {
      case 0:
        return f4
      case 1:
        return _curry3(function (_b, _c, _d) {
          return fn(a, _b, _c, _d)
        })
      case 2:
        return _curry2(function (_c, _d) {
          return fn(a, b, _c, _d)
        })
      case 3:
        return function (_d) {
          return fn(a, b, c, _d)
        }
      default:
        return fn(a, b, c, d)
    }
  }
}

export default _curry4
