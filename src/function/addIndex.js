import concatMap from '../array/concatMap'
import identity from './identity'

/**
 * @name addIndex
 * @function
 * @since v0.11.2
 * @category Function
 * @sig
 * ((a … → b) … → [a] → *) → ((a …, Int, [a] → b) … → [a] → *)
 * @description Creates a new list iteration function from an existing one by adding two new parameters to its callback function: the current index, and the entire list. This will only work for functions in which the iteration callback function is the first parameter, and where the list is the last parameter. (This latter might be unimportant if the list parameter is not used.)
 * @param {Function} fn The original function to add the index and list onto
 * @return {Function} A new function that will come with the index and full list attached.
 * @example
 * import { addIndex, map, filter } from 'kyanite'
 * const m = addIndex(map)
 * const f = addIndex(filter)
 * const r = addIndex(reduce)
 * const data = ['f', 'o', 'o', 'b', 'a', 'r']
 *
 * m((x, i) => `${x}-${i}`, data) // => ['f-0', 'o-1', 'o-2', 'b-3', 'a-4', 'r-5']
 * f((_, i) => i > 2, data) // => ['b', 'a', 'r']
 * r((val, acc, i) => acc.concat(val + i), [], data) // => ['f0', 'o1', 'o2', 'b3', 'a4', 'r5']
 */
const addIndex = fn => (...args) => {
  let idx = 0
  const [origFn] = args
  const list = args[args.length - 1]
  const copiedArgs = args.slice()

  copiedArgs[0] = (...innerArgs) => {
    const result = origFn(...concatMap(identity, [innerArgs, [idx, list]]))

    idx += 1

    return result
  }

  return fn(...copiedArgs)
}

export default addIndex