import curry from './curry'

/**
 * @name some
 * @since v0.6.0
 * @category Array
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @description
 * Loops through a provided list verifying that at least some values evaluates to a truthy value.
 * @param {Function} fn The function to send our values to for validation
 * @param {Array} x The list we are to loop through
 * @return {Boolean} If any values passed will return true else false
 *
 * @example
 * const data = [1, 2, 3, 4]
 *
 * some(x => x > 0, data) // => true
 * some(x => x < 3) // => true
 * some(x => x < 0, data) // => false
 *
 * // It is also curried
 *
 * const run = some(x => x > 0)
 *
 * run([1, 2, 3]) // => true
 * run([-1, 0, 1]) // => true
 * run([-3, -2, -1]) // => false
 */
const some = (fn, x) => x.some(fn)

export default curry(some)
