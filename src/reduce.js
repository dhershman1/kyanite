import curry from './curry'

/**
 * @name reduce
 * @since v2.0.0
 * @category Array
 * @sig (a -> b -> b) -> b -> Array a -> b
 * @description
 * Accepts an array and runs a reduce based on the passed values
 * @param {Function} fn The function to run with the reduce
 * @param {Any} init The empty initial state of the reduce accumulator
 * @param {Array} list The list to run our reduce against
 * @return {Any} Returns based on the original init parameter that is passed in
 *
 * @example
 * reduce((acc, n) => acc + n, 0, [1, 2, 3, 4, 5]); // => 15
 * reduce((acc, n) => {
    if (typeof n === 'number') {
      acc.push(n);
    }

    return acc;
  }, [], ['', 1, 2, '0', 3]); // => [1, 2, 3]
 */
const reduce = (fn, init, list) => list.reduce(fn, init)

export default curry(reduce)
