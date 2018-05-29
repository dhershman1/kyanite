import curry from './curry'

/**
 * @name whole
 * @since v3.0.0
 * @category Object
 * @sig Object k (v -> Boolean) -> Object -> Boolean
 * @description Works a lot like every for array, but for the object data type. Returns whether every key matches the predicate or not
 * @param {Object} schema An Object schema containing the matching properties and the function to run
 * @param {Object} obj The object to sift through
 * @return {Boolean} A boolean dependent on whether or not all values passed
 *
 * @example
 * const run = whole({ a: x => x === 'foo', b: x => x !== 'bar', x: x => x > 10, y: x => x < 20 })
 *
 * run({ a: 'foo', b: 'xxx', x: 11, y: 19 }) // => true
 * run({ a: 'xxx', b: 'xxx', x: 11, y: 19 }) // => false
 */
const whole = (schema, obj) =>
  Object.keys(schema).every(key =>
    schema[key](obj[key]))

export default curry(whole)
