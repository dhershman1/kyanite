import values from './values'

/**
 * @name unzip
 * @since v0.8.0
 * @category Object
 * @sig { k: v } -> [[k], [v]]
 * @description Takes an object and breaks it down into two arrays one being the keys, the other being the values
 * @param {Object} obj The object we want to unzip into arrays
 * @return {Array} An array of 2 arrays, the first being an array of keys, the second being an array of values
 * @example
 *
 * unzip({ a: 1, b: 2, c: 3 }) // => [['a', 'b', 'c'], [1, 2, 3]]
 */
const unzip = obj =>
  [Object.keys(obj), values(obj)]

export default unzip
