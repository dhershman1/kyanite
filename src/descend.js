import curry from './curry'

/**
 * @name descend
 * @since v0.2.0
 * @category Function
 * @sig Any -> Any -> Number
 * @description Determiens which of the two passed in values should be descended
 * @param {Any} a The first value to compare
 * @param {Any} b The second value to compare
 * @return {Number} A number based on which value should descend
 *
 * @example
 *
 * [4, 10, 1, 6, 7, 12].sort(descend) // => [12, 10, 7, 6, 4, 1]
 */
const descend = (a, b) => a > b ? -1 : a < b ? 1 : 0

export default curry(descend)
