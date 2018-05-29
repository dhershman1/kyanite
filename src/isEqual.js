import _equal from './_internals/equal'

/**
 * @name isEqual
 * @since v0.1.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @description Takes and compares two items. Capable of handling cyclical data structures
 * @param  {Any} a First item to compare
 * @param  {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 *
 * @example
 * const obj = isEqual({}, {}); // => true
 * const arr = isEqual([], []); // => true
 */
const isEqual = (a, b) => _equal(a, b, [], [])

export default isEqual
