import curry from './curry'

/**
 * @name any
 * @since v3.0.0
 * @category Object
 * @sig Object k (v -> Boolean) -> Object -> Boolean
 * @description Works a lot like every for array, but for the object data type. Returns whether every key matches the predicate or not
 * @param {Object} schema An Object schema containing the matching properties and the function to run
 * @param {Object} obj The object to run through
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
