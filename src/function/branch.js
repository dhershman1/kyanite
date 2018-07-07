import curry from './curry'

/**
 * @name branch
 * @since v0.4.0
 * @category Function
 * @sig (a -> Boolean) -> (a -> b) -> (a -> b)
 * @description
 * Takes 3 functions and a value, and will run either the 2nd or 3rd function based on if the first passes
 * @param {Function} p The first function to determine the path of our branch
 * @param {Function} f The function to run if the first passes
 * @param {Function} g The function to run if the first fails
 * @param {Any} a The data to pass long our functions
 * @return {Any} The result of the branch function used
 * @example
 * branch(
 *   x => x < 10,
 *   x => x + 1,
 *   x => x - 1,
 *   0
 * ) // => 1
 *
 * // It's also curried
 * const b = branch(
 *   x => x < 10,
 *   x => x + 1,
 *   x => x - 1
 * )
 *
 * b(0) // => 1
 * b(12) // => 11
 */
const branch = (p, f, g, a) => p(a) ? f(a) : g(a)

export default curry(branch)
