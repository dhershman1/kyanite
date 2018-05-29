/**
 * @name values
 * @since v2.0.3
 * @category Object
 * @sig Object { k: v } -> Array v
 * @description Grabs the values from a key value pair object
 * @param {Object} obj The object we want to grab our values from
 * @return {Array} An array of values from the object
 *
 * @example
 *
 * value({ a: 1, b: 2, c: 3 }); // => [1, 2, 3]
 */
const values = obj =>
  Object.keys(obj).map(k => obj[k])

export default values
