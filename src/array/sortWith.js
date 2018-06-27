import curry from '../function/curry'

/**
 * @name sortWith
 * @since v0.2.2
 * @category Array
 * @sig (Array -> Function) -> Array -> Array
 * @description
 * Sorts an array based on the functions passed it, will go through the functions in order
 * and use ties to the next function in order to break ties
 * @param {Array} fns An array of functions to sort with
 * @param {Array} arr The array to be sorted
 * @return {Array} A new and sorted array
 *
 * @example
 * const data = [{name: 'alice', age: 40}, {name: 'bob', age: 30}, {name: 'clara', age: 40}]
 * sortWith([
 *   descendBy(x => x.age),
 *   ascendBy(x => x.name)
 * ], data) // => [{name: 'alice', age: 40}, {name: 'clara', age: 40}, {name: 'bob', age: 30}]
 *
 * // It's also curried
 *
 * const ageNameSort = sortWith([
 *   descendBy(x => x.age),
 *   ascendBy(x => x.name)
 * ])
 *
 * ageNameSort(data) // =>[{name: 'alice', age: 40}, {name: 'clara', age: 40}, {name: 'bob', age: 30}]
 */
const sortWith = (fns, arr) =>
  [...arr].sort((a, b) =>
    fns.reduce((acc, f) => acc === 0 ? f(a, b) : acc, 0))

export default curry(sortWith)
