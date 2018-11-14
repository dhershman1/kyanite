import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'

/**
 * @name plan
 * @function
 * @since v0.1.0
 * @category Object
 * @sig Object -> Object -> Object
 * @description Uses a schema to allow you to plan out functions being ran against values within your object
 * @param {Object} schema The object of functions we want to apply
 * @param {Object} obj The object to apply our functions too
 * @return {Object} A new object with the updated data from our applied functions
 * @example
 * const testFns = {
    a: x => x * 2,
    b: x => x + 10
  }
 *
 * plan(testFns, { a: 5, b: 10 }) // => { a: 10, b: 20 }
 *
 * // It's also curried
 *
 * const p = plan(testFns)
 *
 * p({ a: 5, b: 10 }) // => { a: 10, b: 20 }
 */
const plan = (schema, obj) =>
  Object.assign({}, obj, Object.keys(schema).reduce((acc, k) =>
    !obj.hasOwnProperty(k) ? acc : _assocǃ(acc, k, schema[k](obj[k])), {}))

export default _curry2(plan)
