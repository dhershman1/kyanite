import curry from '../function/curry'

/**
 * @name findIndex
 * @since v0.2.2
 * @category Array
 * @sig Function -> Array -> Maybe
 * @description Runs through an array of values, until it finds the index of one that passes the function, else returns undefined
 * @param {Function} fn The function to test our value against
 * @param {Array} list The array to loop through
 * @return {Maybe} The index the passing value lives at or undefined if it's not found
 * @example
 * findIndex(x => x > 5, [1, 3, 4, 5, 6]) // => 4
 * findIndex(x => x < 0, [1, 3, 4, 5, 6]) // => undefined
 *
 * // It's also curried
 * const f = findIndex(x => x > 5)
 *
 * f([1, 2, 3, 4, 5, 6]) // => 5
 */
const findIndex = (fn, list) => {
  const len = list.length
  let i = 0

  while (i < len) {
    if (fn(list[i])) {
      return i
    }

    i++
  }

  return undefined
}

export default curry(findIndex)
