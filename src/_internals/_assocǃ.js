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
  if (key === '__proto__') {
    // Assigning to __proto__ replaces the object's prototype instead of setting a key
    Object.defineProperty(acc, key, { value: val, writable: true, enumerable: true, configurable: true })
  } else {
    acc[key] = val
  }

  return acc
}

export default _curry3(_assocǃ)
