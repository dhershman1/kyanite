import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'
import reduce from '../function/reduce'
import defaultTo from '../function/defaultTo'

/**
 * @name withDefaults
 * @function
 * @since v1.0.0
 * @category Object
 * @sig Object { k: v } -> Object { k: v } -> Object { k: v }
 * @description Fills in non exsistent property values (null, undefined, and NaN) with the provided defaults.
 * @param {Object} def An object containing the desired default values
 * @param {Object} obj The data object to check
 * @return {Object} A new object with filled in defaults if needed
 * @example
 * import { withDefaults } from 'kyanite'
 *
 * withDefaults({ a: 1, b: 2, c: 3 }, { b: 10, c: 4 }) // => { a: 1, b: 10, c: 4 }
 * withDefaults({ a: 1, b: 2, c: 3 }, { a: null, b: 10, c: 4 }) // => { a: 1, b: 10, c: 4 }
 * withDefaults({ a: 1, b: 2, c: 3 }, { b: NaN, c: 4 }) // => { a: 1, b: 2, c: 4 }
 *
 * // It's also curried
 * const fn = withDefaults({ a: 1, b: 2, c: 3 })
 *
 * fn({ b: 10, c: 4 }) // => { a: 1, b: 10, c: 4 }
 * fn({ a: 12 }) // => { a: 12, b: 2, c: 3 }
 * fn({}) // => { a: 1, b: 2, c: 3 }
 */
const withDefaults = (def, obj) =>
  reduce((k, acc) =>
    _assocǃ(acc, k, defaultTo(def[k], obj[k])), {}, Object.keys(def))

export default _curry2(withDefaults)
