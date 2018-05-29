import isNil from './isNil'

/**
 * @name ensureArray
 * @since v1.0.0
 * @category Array
 * @description
 * Ensures that the value passed in is an array, if not it will make it an array or
 * pass back an empty array if the value if undefined/null
 * @param {Any} x The value to ensure
 * @return {Array} Returns a new array
 *
 * @example
 * ensureArray(1); // => [1]
 * ensureArray(); // => []
 * ensureArray(null); // => []
 * ensureArray('test'); // => ['test']
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
