/** @private @type {(obj: unknown) => string[]} */
const keys = obj => {
  if (typeof Object.keys === 'function') {
    return Object(obj) !== obj ? [] : Object.keys(/** @type {object} */ (obj))
  }

  if (Object(obj) !== obj) {
    return []
  }

  /** @type {string[]} */
  const ks = []

  for (const prop in /** @type {object} */ (obj)) {
    if (Object.prototype.hasOwnProperty.call(obj, prop) && prop !== 'length') {
      ks.push(prop)
    }
  }

  return ks
}

/**
 * @name keys
 * @function
 * @since v3.0.0
 * @category Object
 * @sig { k: v } -> [k]
 * @description Returns a list of all the own properties of an object
 * @param  {Object} obj The object we want to pull the keys from
 * @return {Array} Returns an array of keys from the provided object
 *
 * @example
 * import { keys } from 'kyanite'
 *
 * keys({ a: 1, b: 2, c: 3, d: { x: 100, y: 200 } }) // => ['a', 'b', 'c', 'd']
 */
export default /** @type {{
  (obj: unknown): string[]
}} */ (keys)
