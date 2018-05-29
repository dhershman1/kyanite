import isNil from './isNil'

/**
 * @name compress
 * @since v0.3.0
 * @category Object
 * @sig Object a -> Object b
 * @description Takes an object and compresses it down removing undefined or null values
 * @param {Object} obj The Object to compress
 * @return {Object} Returns a new object without the unwanted values
 *
 * @example
 * compress({ thing: '', test: 1, other: undefined }); // => { thing: '', test: 1 }
 * compress({ thing: '', test: 1, other: null }); // => { thing: '', test: 1 }
 */
const compress = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (!isNil(obj[k])) {
      acc[k] = obj[k]
    }

    return acc
  }, {})

export default compress
