import curry from '../function/curry'

/**
 * @name whole
 * @since v0.1.0
 * @category Object
 * @sig Object k (v -> Boolean) -> Object -> Boolean
 * @description Takes a schema of functions to apply to an object, and makes sure all of them pass
 * @param {Object} schema An Object schema containing the matching properties and the function to run
 * @param {Object} obj The object to iterate through
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
