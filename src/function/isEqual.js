import _curry2 from '../_internals/_curry2'
import compose from '../function/compose'
import eq from './eq'
import length from '../list/length'
import type from './type'
// import _equal from '../_internals/_equal'

/**
 * @name isEqual
 * @since v0.1.0
 * @category Function
 * @sig a -> b -> Boolean
 * @description Takes and compares two items. Capable of handling cyclical data structures
 * @param {Any} a First item to compare
 * @param {Any} b Second item to compare
 * @return {Boolean} Returns the boolean after running our comparison check
 *
 * @example
 * const q = { a: 1 }
 *
 * isEqual({ a: 1 }, { a: 1 }) // => true
 * isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }) // => true
 * isEqual(/[A-Z]/, new RegExp('[A-Z]') // => true
 * isEqual([1, 2], [1, 2]) // => true
 * isEqual(new Date(), new Date()) // => true
 * isEqual({ a: { q } }, { a: { q } }) // => true
 *
 * isEqual([1, 2], [2, 1]) // => false
 * isEqual({ a: 1 }, { b: 1 }) // => false
 * isEqual(new Date('11/14/1992'), new Date('11/14/2018')) // => false
 * isEqual([], {}) // => false
 * isEqual('test', new String('test')) // => false
 * isEqual(false, new Boolean(false)) // => false
 * isEqual(5, new Number(5)) // => false
 */
const isEqual = (a, b) => {
  if (type(a) !== type(b)) {
    return false
  }

  switch (type(a)) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Promise':
      return eq(a, b)
    case 'Date':
      return a.valueOf() === b.valueOf()
    case 'RegExp':
      return ['source', 'global', 'ignoreCase', 'multiline', 'sticky', 'unicode'].every(p => a[p] === b[p])
    default:
      const isComplex = a => Array.isArray(a) || Object.prototype.toString.call(a) === '[object Object]'
      const keyCheck = compose(length, Object.keys)

      if (keyCheck(a) !== keyCheck(b)) {
        return false
      }

      return Object.keys(a).every(key => {
        const aVal = a[key]
        const bVal = b[key]

        if (isComplex(aVal)) {
          return isEqual(aVal, bVal)
        }

        return eq(aVal, bVal)
      })
  }
}

export default _curry2(isEqual)
