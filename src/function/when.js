import curryN from './curryN'

/**
 * @name when
 * @since v0.1.0
 * @category Function
 * @sig (a -> Boolean) -> (a -> b) -> a -> b
 * @description Takes a value and if it passes the check function (1st param) then it will apply the action function (2nd param) otherwise undefined is given back
 * @param {Function} fn The check function that when passed if returns a truthy value trigger the action
 * @param {Function} act The action function which is fired when the logic passes
 * @param {Any} args The arguments to pass to both functions
 * @return {Any} Returns whatever the action function returns, or undefined
 * @example
 * when(x => x > 2, x => x * 2, 5) // => 10
 * when(x => x > 5, x => x * 2, 5) // => undefined
 *
 * // It's also curried
 *
 * const w = when(x => x > 2, x => x * 2)
 *
 * w(5) // => 10
 * w(1) // => undefined
 */
const when = (fn, act, ...args) => {
  if (fn(...args)) {
    return act(...args)
  }

  return undefined
}

export default curryN(3, when)
