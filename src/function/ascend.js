import curry from './curry'

/**
 * @name ascend
 * @since v0.2.0
 * @category Function
 * @sig Any -> Any -> Number
 * @description Determiens which of the two passed in values should be ascended
 * @param {Any} a The first value to compare
 * @param {Any} b The second value to compare
 * @return {Number} A number based on which value should ascend
 *
 * @example
 *
 * [4, 10, 1, 6, 7, 12].sort(ascend) // => [1, 4, 6, 7, 10, 12]
 */
const ascend = (a, b) => a < b ? -1 : a > b ? 1 : 0

export default curry(ascend)
