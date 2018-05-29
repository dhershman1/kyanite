import curry from './curry'

/**
 * @name map
 * @since v0.6.0
 * @category Array
 * @sig (a -> b) -> f a -> f b
 * @description
 * Takes a function and applies it to all of the values within the provided list,
 * and brings back a new list of the same type.
 * @param {Function} fn The function to run against the values in our functor
 * @param {Array|Object} list The list to iterate through
 * @return {Array|Object} The new Array or Object that was created
 *
 * @example
 * const dbl = n => n * 2;
 *
 * map(dbl, [1, 2, 3]); // => [2, 4, 6]
 *
 * // It's also curried
 *
 * const dbler = map(dbl);
 *
 * dbler([1, 2, 3]); // => [2, 4, 6]
 */
const map = (fn, list) => list.map(fn)

export default curry(map)
