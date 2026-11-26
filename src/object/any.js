import _curry2 from '../_internals/_curry2.js'
import keys from './keys.js'
/** @import { Schema } from '../_internals/_types.js' */

/** @private @type {(schema: Schema, obj: { [key: string]: any }) => boolean} */
const any = (schema, obj) =>
  keys(schema).some(key =>
    schema[key](obj[key]))

/**
 * @name any
 * @function
 * @since v0.1.0
 * @category Object
 * @sig Object k (v -> Boolean) -> Object -> Boolean
 * @description Takes in a schema of functions to apply to an object, makes sure any of them pass
 * @param {Object} schema An Object schema containing the matching properties and the function to run
 * @param {Object} obj The object to iterate through
 * @return {Boolean} A boolean dependent on whether or not any values passed
 *
 * @example
 * import { any } from 'kyanite'
 *
 * const run = any({
 *  a: x => x === 'foo',
 *  b: x => x !== 'bar'
 * })
 *
 * run({ a: 'foo', b: 'xxx', x: 11, y: 19 }) // => true
 * run({ a: 'xxx', b: 'bar' }) // => false
 */
export default /** @type {{
  (schema: Schema): (obj: { [key: string]: any }) => boolean
  (schema: Schema, obj: { [key: string]: any }): boolean
}} */ (_curry2(any))
