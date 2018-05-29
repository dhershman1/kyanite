/**
 * @name deepClone
 * @since v0.1.0
 * @category Function
 * @sig {*} -> {*}
 * @description Clones the object sent in (Hard Clone)
 * @param  {Any} x The value we want to get cloned
 * @return {Any} The newly cloned value
 *
 * @example
 * const data = { test: 1 }
 * const cloned = deepClone(data); // => { test: 1 }
 *
 * cloned.test = 2;
 *
 * console.log(data); // => { test: 1 }
 * console.log(cloned); // => { test: 2 }
 */
const deepClone = x => JSON.parse(JSON.stringify(x))

export default deepClone
