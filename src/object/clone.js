/**
 * @name clone
 * @since v0.8.0
 * @category Object
 * @sig Object -> Maybe Boolean -> Object
 * @description Creates either a shallow or deep clone of the provided object
 * @param {Object} x The object we want to create a clone of
 * @param {Boolean} deep Whether or not we want to create a shallow or deep clone of the object
 * @return {Object} A clone of the provided object
 * @example
 *
 * clone({ a: 1 }) // => { a: 1 }
 * clone({ a: 1 }, true) // => { a: 1 }
 *
 * // Using deep clone would technically work on arrays too
 * clone([1, 2, 3], true) // => [1, 2, 3]
 *
 * const obj = { a: 1 }
 * const tst = clone(obj)
 *
 * tst.a = 2
 *
 * console.log(tst) // => { a: 2 }
 * console.log(obj) // => { a: 1 }
 */
const clone = (x, deep = false) => {
  if (deep) {
    return JSON.parse(JSON.stringify(x))
  }

  return Object.keys(x).reduce((acc, k) => {
    acc[k] = x[k]

    return acc
  }, {})
}

export default clone
