/**
 * @name reduced
 * @function
 * @since v0.11.0
 * @category Array
 * @sig (a -> a) -> a
 * @description
 * Used to optimize reduce iterations, can be used to short circuit a reduce without needing to iterate an entire array
 * The returned value should be considered as a black box, it is not guaranteed to be stable
 * This optimization only works with `reduce`, and `reduceRight` currently
 * @param {Any} x The data that is considered reduced
 * @return {Any} The wrapped value
 * @example
 * import { reduce, reduced } from 'kyanite'
 *
 * reduce((item, acc) =>
 *   item > 3 ? reduced(acc) : acc.concat(item), [], [1, 2, 3, 4, 5]) // => [1, 2, 3]
 * reduce((item, acc) =>
 *   acc.length === 3 ? reduced(acc) : acc.concat(item * 2), [], [1, 2, 3, 4, 5]) // => [2, 4, 6]
 */
const reduced = x =>
  x && x['@@transduce/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transduce/reduced': true
  }

export default reduced
