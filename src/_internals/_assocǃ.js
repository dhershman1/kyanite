import _curry3 from './_curry3'

/**
 * A contained dangerous setter direct mutation
 * @private
 * @param {Object} acc The accumulator to append to
 * @param {String} key The key to set within the object
 * @param {Any} value The value to set it to
 * @return {Object} The Object with the changed value
 */
const _assocǃ = (acc, key, val) => {
  acc[key] = val

  return acc
}

export default _curry3(_assocǃ)
