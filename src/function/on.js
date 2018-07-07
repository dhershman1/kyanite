import curry from './curry'

/**
 * @name on
 * @since v0.4.0
 * @category Function
 * @sig (c -> c -> d) -> (a -> b -> c) -> a -> b -> d
 * @description
 * Applies the second function to the values passed in, and then runs the first function against those new values
 * @param {Function} fn The first function being ran against the values from the second
 * @param {Function} gn The function to be applied to the two values passed in
 * @param {Any} a The first value to use
 * @param {Any} b The second value we want to use
 * @return {Any} A value based on the first functions return
 * @example
 * on((x, y) => x === y, x => x.length, 'you', 'are') // => true
 *
 * // It's also curried
 *
 * const f = on((x, y) => x === y)
 *
 * f(x => x.length, 'you', 'are') // => true
 *
 * const g = f(x => x.length)
 *
 * g('you', 'are') // => true
 *
 * const h = f('you')
 *
 * h('are') // => true
 */
const on = (fn, gn, a, b) => fn(gn(a), gn(b))

export default curry(on)
