import always from './always'
import compose from './compose'
import either from './either'
import eq from './eq'
import height from '../object/height'
import length from '../list/length'
import pipe from './pipe'
import size from './size'
import type from './type'
import when from './when'

/**
 * @name count
 * @function
 * @since v0.11.0
 * @category Function
 * @sig a -> Number
 * @description Counts the number of values within a collection of data
 * @param {Any} a The data to count
 * @return {Number} The number of counted values within the provided data
 * @example
 * import { count } from 'kyanite'
 *
 * count([1, 2, 3]) // => 3
 * count({ a: 1, b: 2, c: 3 }) // => 3
 * count('coolkid') // => 7
 * count(new Map([['a', 1], ['b', 2], ['c', 3]])) // => 3
 * count(new Set([1, 2, 3])) // => 3
 * count([]) // => 0
 * count({}) // => 0
 * count('') // => 0
 * count(new Map()) // => 0
 * count(new Set()) // => 0
 */
const count = a => {
  const A = always(a)

  return pipe([
    type,
    when(eq('Object'), compose(height, A)),
    when(either(eq('Array'), eq('String')), compose(length, A)),
    when(either(eq('Map'), eq('Set')), compose(size, A))
  ], a)
}

export default count
