import type from './type'

/**
 * @name empty
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @description Empties out the items of the sent value
 * @param  {*} x The item to empty
 * @return {*} Returns the empty item
 *
 * @example
 * empty({ test: 1 }) // => {}
 * empty([1, 2, 3]) // => []
 * empty('test') // => ''
 */
const empty = x => {
  if (type(x) === 'Array') {
    return []
  }

  if (type(x) === 'String') {
    return ''
  }

  if (type(x) === 'Object') {
    return {}
  }

  return void 0
}

export default empty
