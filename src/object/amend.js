import _curry2 from '../_internals/_curry2'

/**
 * @name amend
 * @function
 * @since v0.10.0
 * @category Object
 * @sig Object -> Object -> Object
 * @description Updates an object by merging a newer one into the old
 * @param {Object} a The new object data or values
 * @param {Object} b The object we want to amend/update
 * @return {Object} The newly amended object
 * @example
 * import { amend } from 'kyanite'
 *
 * amend({ b: 2 }, { a: 1 }) // => { a: 1, b: 2 }
 *
 * // It's also curried
 * const fn = amend({ b: 2 })
 *
 * fn({ a: 1 }) // => { a: 1, b: 2 }
 * fn({ c: 3 }) // => { c: 3, b: 2 }
 */
const amend = (a, b) =>
  Object.assign({}, b, a)

export default _curry2(amend)
