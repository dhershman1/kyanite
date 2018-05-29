/**
 * @name entries
 * @since v2.0.3
 * @category Object
 * @sig Object { k: v } -> Array [k, v]
 * @description Creates an array of arrays with the key value pairs of an object
 * @param {Object} obj The object we want to grab our data from
 * @return {Array} An array of arrays with the key value pairs from the object
 *
 * @example
 *
 * entries({ a: 1, b: 2, c: 3 }); // => [['a', 1], ['b', 2], ['c', 3]]
 */
const entries = obj =>
  Object.keys(obj).map(k => [k, obj[k]])

export default entries
