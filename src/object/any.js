import curry from '../function/curry'

/**
 * @name any
 * @since v0.1.0
 * @category Object
 * @sig Object k (v -> Boolean) -> Object -> Boolean
 * @description Takes in a schema of functions to apply to an object, makes sure any of them pass
 * @param {Object} schema An Object schema containing the matching properties and the function to run
 * @param {Object} obj The object to iterate through
 * @return {Boolean} A boolean dependent on whether or not any values passed
 *
 * @example
 * const run = any({
 *  a: x => x === 'foo',
 *  b: x => x !== 'bar'
 * })
 *
 * run({ a: 'foo', b: 'xxx', x: 11, y: 19 }) // => true
 * run({ a: 'xxx', b: 'bar' }) // => false
 */
const any = (schema, obj) =>
  Object.keys(schema).some(key =>
    schema[key](obj[key]))

export default curry(any)
