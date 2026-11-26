import _isTransformer from './_isTransformer.js'

/**
 * Lets a function double as a transducer. `transduce` calls `map(inc)` with a transformer
 * where a list would normally go, when that happens the transformer version is built instead
 * @private
 * @param {(a: any, xf: any) => any} xf Builds the transformer version, given the first argument and the next transformer
 * @param {(a: any, list: any) => any} fn The normal version of the function
 * @return {(a: any, b: any) => any} A function that picks between the two
 */
export default function _dispatchable (xf, fn) {
  return (a, b) => _isTransformer(b) ? xf(a, b) : fn(a, b)
}
