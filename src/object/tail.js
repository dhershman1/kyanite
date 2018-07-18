import last from '../array/last'

/**
 * @name tail
 * @since v0.5.0
 * @category Object
 * @sig Object { k: v } -> v
 * @description Returns the last value from an object
 * @param {Object} obj The object to retrieve the value from
 * @return {Any} The last value within the object
 * @example
 * last({ a: 1, b: 2, c: 3 }) // => 3
 * last({ a: 1, d: { b: 2, c: 3 } }) // => { b: 2, c: 3 }
 */
const tail = obj => {
  const key = last(Object.keys(obj))

  return key ? obj[key] : {}
}

export default tail
