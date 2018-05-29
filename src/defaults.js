import curry from './curry'

/**
 * @name defaults
 * @since v0.5.0
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
 *
 * // It's also curried
 *
 * const def = defaults({ test: 1, thing: 2 })
 *
 * def({ thing: 4 }) // => { test: 1, thing: 4 }
 */
const defaults = (def, data) =>
  Object.keys(def).reduce((acc, prop) => {
    if (acc[prop] == null) {
      acc[prop] = def[prop]
    }

    return acc
  }, data)

export default curry(defaults)
