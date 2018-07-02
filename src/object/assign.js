import has from './has'

/**
 * @name assign
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @description Create a new object from the provided objects in the parameters defaults to Object.assign if able
 * @param  {Object} args The object(s) we want to combine
 * @return {Object} A new Object
 *
 * @example
 * assign({ a: 1 }); // => { a: 1 }
 * assign({ test: 1 }, { thing: 2 }); // => { test: 1, thing: 2 }
 * assign({ a: 1, b: 2, c: 3 }, { c: 5, d: 3 }); // => { a: 1, b: 2, c: 5, d: 3 }
 * assign({ a: 1 }, { b: 2 }, { c: 5 }, { c: 3 }, { d: 4 }); // => { a: 1, b: 2, c: 3, d: 4 }
 */
const assign = (...args) =>
  args.reduce(function (acc, x) {
    for (const key in x) {
      if (has(key, x)) {
        acc[key] = x[key]
      }
    }

    return acc
  }, {})

export default assign
