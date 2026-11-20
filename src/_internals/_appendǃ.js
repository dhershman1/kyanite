/**
 * A dangerous append mutation
 * @private
 * @template T
 * @param {T[]} acc The accumulator to append to
 * @param {T} value The value to append
 * @return {T[]} The array with the appended value
 */
const _appendǃ = (acc, value) => {
  acc.push(value)

  return acc
}

export default _appendǃ
