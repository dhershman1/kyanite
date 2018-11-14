/**
 * A dangerous append mutation
 * @private
 * @param {Array} acc The accumulator to append to
 * @param {Any} value The value to append
 * @return {Array} The array with the appended value
 */
const _appendǃ = (acc, value) => {
  acc.push(value)

  return acc
}

export default _appendǃ
