import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'

/**
 * @name defaults
 * @since v0.1.0
 * @category Object
 * @sig {a} -> {b} -> {c}
 * @description
 * Applies default properties to an object that does not contain the smae or contains falsey values on those properties
 * @param {Object} def The default object to reference
 * @param {Object} data The data object to loop through
 * @return {Object} A New object
 *
 * @example
 *
 * defaults({ test: 1, thing: 2 }, { thing: 4 }) // => { test: 1, thing: 4 }
 * defaults({ foo: 1, bar: 2, baz: 3 }, { foo: 3, bar: 12, baz: null }) // => { foo: 3, bar: 12, baz: null }
 *
 * // It's also curried
 *
 * const def = defaults({ test: 1, thing: 2 })
 *
 * def({ thing: 4 }) // => { test: 1, thing: 4 }
 */
const defaults = (def, obj) =>
  Object.keys(def).reduce((acc, prop) =>
    obj[prop] === undefined ? _assocǃ(acc, prop, def[prop]) : _assocǃ(acc, prop, obj[prop]), {})

export default _curry2(defaults)
