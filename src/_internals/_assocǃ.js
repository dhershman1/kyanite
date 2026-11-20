import _curry3 from './_curry3.js'

/**
 * A contained dangerous setter direct mutation
 * @private
 * @param {any} acc The accumulator to set the value on
 * @param {PropertyKey} key The key to set within the object
 * @param {any} val The value to set it to
 * @return {any} The Object with the changed value
 */
const _assocǃ = (acc, key, val) => {
  acc[key] = val

  return acc
}

export default _curry3(_assocǃ)
