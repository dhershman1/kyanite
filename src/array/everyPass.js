import _curry2 from '../_internals/_curry2'
import reduce from '../function/reduce'
import reduced from '../function/reduced'

/**
 * @name everyPass
 * @function
 * @since v0.12.0
 * @category Array
 * @sig [(a -> Boolean)] -> a -> Boolean
 * @description
 * Takes a value and passes it through an array of functions until the end of the array or one of the functions returns false
 * @param {Array} fns The array of functions to pass the value to
 * @param {Any} data The data value to give to each function
 * @return {Boolean} Based on if all the functions pass or not
 *
 * @example
 * import { everyPass } from 'kyanite'
 *
 * everyPass([x => x > 2, x => x < 4], 3) // => true
 * everyPass([x => x > 7, x => x < 3], 5) // => false
 *
 * // It is also curried
 *
 * const fn = everyPass([x => x > 0, x => x < 4])
 *
 * fn(3) // => true
 * fn(2) // => true
 * fn(0) // => false
 */
const everyPass = (fns, data) => reduce((f, acc) => !f(data) ? reduced(false) : acc, true, fns)

export default _curry2(everyPass)
