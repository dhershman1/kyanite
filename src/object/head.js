/**
 * @name head
 * @since v0.5.0
 * @category Object
 * @sig Object { k: v } -> v
 * @description Returns the first value from an object
 * @param {Object} obj The object to retrieve the value from
 * @return {Any} The first value within the object
 * @example
 * head({ a: 1, b: 2, c: 3 }) // => 1
 * head({ a: { b: 2, c: 3 }, d: 1 }) // => { b: 2, c: 3 }
 */
const head = obj => {
  const [key] = Object.keys(obj)

  return key ? obj[key] : {}
}

export default head
