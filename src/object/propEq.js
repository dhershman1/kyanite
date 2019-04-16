import _curry3 from '../_internals/_curry3'
import eq from '../function/eq'
import compose from '../function/compose'
import prop from './prop'

/**
 * @name propEq
 * @function
 * @since v0.12.2
 * @category Object
 * @sig String -> * -> { k: * } -> Boolean
 * @description Takes a desired property from an object and compares the value against a provided value to make sure they're equal
 * @param {String} key The key to look for in the object
 * @param {Any} val The value the property should equal
 * @param {Object} obj The object to pull the property from to compare
 * @return {Boolean} Whether or not the values are equal
 * @example
 * import { propEq } from 'kyanite'
 *
 * const abby = { name: 'Abby', age: 7, hair: 'blond' }
 * const fred = { name: 'Fred', age: 12, hair: 'brown' }
 * const rusty = { name: 'Rusty', age: 10, hair: 'brown' }
 * const george = { name: 'george', age: 9 }
 * const kids = [abby, fred, rusty, george]
 *
 * propEq('hair', 'brown', abby) // => false
 * propEq('hair', 'brown', george) // => false
 * propEq('hair', 'brown', rusty) // => true
 *
 * // It's also curried
 *
 * const fn = propEq('hair')
 * const gn = fn('brown')
 *
 * kids.filter(fn('blond')) // => [abby]
 * kids.filter(gn) // => [fred, rusty]
 */
const propEq = (key, val, obj) => compose(eq(val), prop(key), obj)

export default _curry3(propEq)
