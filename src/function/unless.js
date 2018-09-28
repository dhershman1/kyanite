import curryN from './curryN'

/**
 * @name unless
 * @since v0.9.0
 * @category Function
 * @sig (a -> Boolean) -> (a -> b) -> a -> b
 * @description Takes a value and if it fails the check function (1st param) then it will apply the action function (2nd param) otherwise it gives back the given value
 * @param {Function} fn The check function that when failed triggers the action function
 * @param {Function} act The action function to apply to our data
 * @param {Any} x The argument to pass to both functions
 * @return {Any} Returns whatever the action function returns, or the value that was passed in
 * @example
 * unless(x => x > 2, x => x * 2, 5) // => 5
 * unless(x => x > 5, x => x * 2, 5) // => 10
 *
 * // It's also curried
 *
 * const un = unless(x => x > 2, x => x * 2)
 *
 * un(5) // => 5
 * un(1) // => 2
 */
const unless = (fn, act, x) =>
  fn(x) ? x : act(x)

export default curryN(3, unless)
