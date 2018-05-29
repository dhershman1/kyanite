/**
 * @name juxt
 * @since v0.5.0
 * @category Function
 * @sig (a, b, …, m) → n → ((a, b, …, m) → [n])
 * @description Applies the provided function and turns them into a single function you can use on a value
 * @param {Array} fns An array of functions to apply
 * @return {Function} The function you can use on your data value
 *
 * @example
 * const getRange = juxt([Math.min, Math.max]);
 *
 * getRange(3, 4, 9, -3); // => [-3, 9]
 */
const juxt = (fns = []) =>
  (...x) => fns.map(f => f(...x))

export default juxt
