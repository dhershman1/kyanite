import curryN from './curryN'

/**
 * @name when
 * @since v0.1.0
 * @category Function
 * @sig (a -> Boolean) -> (a -> b) -> a -> b
 * @description Takes a value and if it passes the check function (1st param) then it will apply the action function (2nd param) otherwise it gives back the given value
 * @param {Function} fn The check function that when passed triggers the action function
 * @param {Function} act The action function which is fired when the logic passes
 * @param {Any} x The argument to pass to both functions
 * @return {Any} Returns whatever the action function returns, or the value that was passed in
 * @example
 * when(x => x > 2, x => x * 2, 5) // => 10
 * when(x => x > 5, x => x * 2, 5) // => 5
 *
 * // It's also curried
 *
 * const w = when(x => x > 2, x => x * 2)
 *
 * w(5) // => 10
 * w(1) // => 1
 */
const when = (fn, act, x) =>
  fn(x) ? act(x) : x

export default curryN(3, when)
