/** @private @type {<T = any>(arrs: ReadonlyArray<ReadonlyArray<T>>) => T[]} */
const difference = arrs => {
  // How many of the lists each value shows up in, in the order they're first seen
  const counts = new Map()

  for (const arr of arrs) {
    for (const x of new Set(arr)) {
      counts.set(x, (counts.get(x) || 0) + 1)
    }
  }

  return [...counts].filter(([, n]) => n === 1).map(([x]) => x)
}

/**
 * @name difference
 * @since v0.1.0
 * @function
 * @category Array
 * @sig [*] -> [*] -> [*]
 * @description Returns a new array of values that are not contained within any of the arrays
 * @param {Array} arrs The array of arrays we want to get the difference of
 * @return {Array} An array of elements that are not present in all of the arrays
 *
 * @example
 * import { difference } from 'kyanite'
 *
 * difference([[1, 2, 3], [1]]) // => [2, 3]
 * difference([[1], [1, 2, 3]]) // => [2, 3]
 * difference([[1], [1, 2, 3], [2, 4]]) // => [3, 4]
 */
export default /** @type {{
  <T = any>(arrs: ReadonlyArray<ReadonlyArray<T>>): T[]
}} */ (difference)
