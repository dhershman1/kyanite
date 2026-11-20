import _curry2 from './_curry2.js'
import _curry3 from './_curry3.js'

/**
 * This is an optimized internal curry function for 4 param functions
 * @private
 * @category Function
 * @param {(a: any, b: any, c: any, d: any) => any} fn The function to curry
 * @return {any} The curried function, each export casts this to its own public type
 */
function _curry4 (fn) {
  /**
   * @param {any} [a]
   * @param {any} [b]
   * @param {any} [c]
   * @param {any} [d]
   * @returns {any}
   */
  return function f4 (a, b, c, d) {
    switch (arguments.length) {
      case 0:
        return f4
      case 1:
        return _curry3(function (/** @type {any} */ _b, /** @type {any} */ _c, /** @type {any} */ _d) {
          return fn(a, _b, _c, _d)
        })
      case 2:
        return _curry2(function (/** @type {any} */ _c, /** @type {any} */ _d) {
          return fn(a, b, _c, _d)
        })
      case 3:
        return function (/** @type {any} */ _d) {
          return fn(a, b, c, _d)
        }
      default:
        return fn(a, b, c, d)
    }
  }
}

export default _curry4
