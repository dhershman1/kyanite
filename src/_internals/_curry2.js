/**
 * This is an optimized internal curry function for 2 param functions
 * @private
 * @category Function
 * @param {(a: any, b: any) => any} fn The function to curry
 * @return {any} The curried function, each export casts this to its own public type
 */
function _curry2 (fn) {
  /**
   * @param {any} [a]
   * @param {any} [b]
   * @returns {any}
   */
  return function f2 (a, b) {
    if (!arguments.length) {
      return f2
    }

    if (arguments.length === 1) {
      return function (/** @type {any} */ _b) {
        return fn(a, _b)
      }
    }

    return fn(a, b)
  }
}

export default _curry2
