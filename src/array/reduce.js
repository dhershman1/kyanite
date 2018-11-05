import _curry3 from '../_internals/_curry3'

/**
 * @name reduce
 * @since v0.1.0
 * @category Array
 * @sig (a -> b -> b) -> b -> Array a -> b
 * @description
 * Accepts an array and runs a reduce based on the passed values
 * The reducer function accepts the params a bit differently than the vanilla counterpart
 * As the reducer should expect the value first, and the accumulator second
 * @param {Function} fn The function to run with the reduce should expect the value first and the accumulator second: (a, acc) => {}
 * @param {Any} init The empty initial state of the reduce accumulator
 * @param {Array} list The list to run our reduce against
 * @return {Any} Returns based on the original init parameter that is passed in
 *
 * @example
 * reduce((n, acc) => acc + n, 0, [1, 2, 3, 4, 5]) // => 15
 * reduce((n, acc) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]) // => [1, 2, 3]
 */
const reduce = (fn, init, list) =>
  list.reduce((acc, x) => fn(x, acc), init)

export default _curry3(reduce)
