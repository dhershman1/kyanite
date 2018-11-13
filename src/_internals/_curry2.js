/**
 * This is an optimized internal curry function for 2 param functions
 * @private
 * @category Function
 * @param {Function} fn The function to curry
 * @return {Function} The curried function
 */
function _curry2 (fn) {
  return function f2 (a, b) {
    if (!arguments.length) {
      return f2
    }

    if (arguments.length === 1) {
      return function (_b) {
        return fn(a, _b)
      }
    }

    return fn(a, b)
  }
}

export default _curry2
