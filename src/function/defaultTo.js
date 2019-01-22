import _curry2 from '../_internals/_curry2'
import eq from './eq'
import isNil from './isNil'

/**
 * @name defaultTo
 * @function
 * @since v0.10.0
 * @category Function
 * @sig a -> b -> a|b
 * @description Returns the value if it isn't null, NaN, or undefined. Returns the provided default value if it is
 * @param {Any} def The default value to fall back on
 * @param {Any} val The value to return if not null, NaN, or undefined
 * @return {Any} Returns the value if it exists, returns the default otherwise
 * @example
 * import { defaultTo } from 'kyanite'
 *
 * defaultTo('foo', null) // => 'foo'
 * defaultTo('foo', 'bar') // => 'bar'
 *
 * // It's also curried
 * const fn = defaultTo('foo')
 *
 * fn(null) // => 'foo'
 * fn('bar') // => 'bar'
 */
const defaultTo = (def, val) => isNil(val) || eq(NaN, val) ? def : val

export default _curry2(defaultTo)
