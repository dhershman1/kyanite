import curryN from './curryN'

/**
 * @name when
 * @since v3.0.0
 * @category Function
 * @sig Function -> Function -> a -> b
 * @param {Function} fn The function that when passed, do the action
 * @param {Function} act The function fired when the logic passes
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
