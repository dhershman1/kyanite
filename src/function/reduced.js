/**
 * @name reduced
 * @function
 * @since v0.11.0
 * @category Function
 * @sig (a -> a) -> a
 * @description
 * Used to optimize reduce iterations, can be used to short circuit a reduce without needing to iterate an entire array
 * The returned value should be considered as a black box, it is not guaranteed to be stable
 * This optimization only works with `reduce`, and `reduceRight` currently
 * @param {Any} x The data that is considered reduced
 * @return {Any} The wrapped value
 * @example
 * import { compose, inc, dec, pipe, reduce, reduced, when } from 'kyanite'
 *
 * reduce((item, acc) =>
 *   item > 3 ? reduced(acc) : acc.concat(item), [], [1, 2, 3, 4, 5]) // => [1, 2, 3]
 * reduce((item, acc) =>
 *   acc.length === 3 ? reduced(acc) : acc.concat(item * 2), [], [1, 2, 3, 4, 5]) // => [2, 4, 6]
 *
 * // Using it with pipe is also do able
 * const fn = pipe([
 *   when(lt(10), compose(reduced, inc)),
 *   when(gt(10), compose(reduced, dec))
 * ])
 *
 * fn(1) // => 2
 * fn(20) // => 19
 * fn(10) // => 10
 */
const reduced = x =>
  x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  }

export default reduced
