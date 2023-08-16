import _reduce from '../_internals/_reduce.js'
import _assocǃ from '../_internals/_assocǃ.js'

/**
 * @name fromPairs
 * @function
 * @since v1.5.0
 * @category Array
 * @sig [[k, v]] -> { k: v }
 * @description Takes an array of arrays which contain key value pairs and builds a new object
 * @param {Array} pairs And array of arrays containing key value pairing
 * @return {Object} A new object built from the provided key value pairs
 * @example
 * import { fromPairs } from 'kyanite'
 *
 * fromPairs([['a', 1], ['b', 2], ['c', 3]] // => { a: 1, b: 2, c: 3 }
 * fromPairs([[1, 'a'], [2, 'b']]) // => { 1: 'a', 2: 'b' }
 * fromPairs([]) // => {}
 * fromPairs([[]]) // => {}
 */
const fromPairs = pairs =>
  _reduce(([key, value], acc) => {
    if (!key) {
      return acc
    }

    return _assocǃ(acc, key, value)
  }, {}, pairs)

export default fromPairs
