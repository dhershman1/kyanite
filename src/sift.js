import curry from './curry'

/**
 * @name sift
 * @since v3.0.0
 * @category Object
 * @sig Array -> Object -> Object
 * @description Works a lot like an array filter, but for the object data type
 * @param {Array} arr An array of properties to filter for
 * @param {Object} obj The object to sift through
 * @return {Object} A new filtered out object
 *
 * @example
 * sift(['id', 'thing'], { id: 44, thing: 'test', other: 'cool' }) // => { id: 44, thing: 'test' }
 *
 * // It's also curried
 *
 * const sifter = sift(['id', 'thing'])
 *
 * sifter({ id: 44, thing: 'test', other: 'cool' }) // => { id: 44, thing: 'test' }
 */
const sift = (arr, obj) =>
  Object.keys(obj).reduce((acc, k) => {
    if (arr.indexOf(k) !== -1) {
      acc[k] = obj[k]
    }

    return acc
  }, {})

export default curry(sift)
