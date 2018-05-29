import curry from './curry'

/**
 * @name has
 * @since v0.2.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @description Determines if the object has a property
 * @param  {String} prop The prop to look for
 * @param  {Object} obj The Object we are searching
 * @return {Boolean} Returns based on if the prop is found or not
 *
 * @example
 * const obj = has('thing', { test: 1, thing: 2 }); // => true
 *
 * // has is also curried
 *
 * const propSet = has('thing');
 *
 * propSet({ test: 1, thing: 2 }); // => true
 */
const has = (prop, obj) =>
  Object.prototype.hasOwnProperty.call(obj, prop)

export default curry(has)
