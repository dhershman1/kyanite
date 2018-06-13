/**
 * @name type
 * @since v0.1.0
 * @category Function
 * @sig a -> Boolean
 * @description Finds the type of the sent value
 * @param  {Any} x The value to test
 * @return {String} A string based on the type of the value passed in
 *
 * @example
 * type({}); // => 'Object'
 * type([]); // => 'Array'
 * type(null); // => 'Null'
 * type(undefined); // => 'Undefined'
 * type('hi'); // => 'String'
 * type(1); // => 'Number'
 * type(/1/g); // => 'RegExp'
 * type(new Date()); // => 'Date'
 * type(true); // => 'Boolean'
 */
const type = x => {
  if (x === null) {
    return 'Null'
  }
  if (x === undefined) {
    return 'Undefined'
  }

  return Object.prototype.toString.call(x).slice(8, -1)
}

export default type
