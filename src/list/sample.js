/**
 * @name sample
 * @since v0.10.0
 * @category List
 * @sig Array [a] -> a
 * @description Grabs a random item from a provided array
 * @param {Array|String} list The list we want to choose from
 * @return {Any} A value from the list
 * @example
 * sample('abcdefghijklmnop') // => 'h'
 * sample(['pony', 'unicorn', 'rainbow']) //=> 'unicorn'
 */
const sample = list =>
  list[Math.floor(Math.random() * list.length)]

export default sample
