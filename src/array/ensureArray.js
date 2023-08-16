import isNil from '../function/isNil.js'

/**
 * @name ensureArray
 * @function
 * @since v0.1.0
 * @category Array
 * @sig * -> [*]
 * @description
 * Ensures that the value passed in is an array, if not it will make it an array or
 * pass back an empty array if the value if undefined/null
 * @param {Any} x The value to ensure
 * @return {Array} Returns a new array
 *
 * @example
 * import { ensureArray } from 'kyanite'
 *
 * ensureArray(1) // => [1]
 * ensureArray() // => []
 * ensureArray(null) // => []
 * ensureArray('test') // => ['test']
 */
const ensureArray = x => {
  if (Array.isArray(x)) {
    return x
  }

  if (isNil(x)) {
    return []
  }

  return [x]
}

export default ensureArray
