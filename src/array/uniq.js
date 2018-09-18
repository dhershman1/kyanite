import identity from '../function/identity'
import uniqBy from './uniqBy'

/**
 * @name uniq
 * @since v0.1.0
 * @category Array
 * @sig (a -> b) -> Array a -> Array a
 * @description Returns an array of unique values from the applied function
 * @param {Array} list The list to sift through
 * @return {Array} An array of uniq values from the provided function
 *
 * @example
 *
 * uniq([1, 2, 2, 3, 3, 4, 5]) // => [1, 2, 3, 4, 5]
 */
const uniq = uniqBy(identity)

export default uniq
