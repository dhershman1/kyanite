import assign from './assign'
import curry from './curry'

/**
 * @name plan
 * @since v3.0.0
 * @category Object
 * @sig Object -> Object -> Object
 * @description Uses a schema to apply a map like functionality on a given object
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
  assign({}, obj, Object.keys(schema).reduce((acc, k) => {
    if (!obj.hasOwnProperty(k)) {
      return acc
    }

    acc[k] = schema[k](obj[k])

    return acc
  }, {}))

export default curry(plan)
