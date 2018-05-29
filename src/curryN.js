/**
 * @name curryN
 * @category Function
 * @sig Number -> ((a, b) -> c) -> a -> b -> c
 * @description Acts like curry but this one expects you to tell it how many arguments to expect
 * this allows it to work well with rest parameters and default params.
 * @param {Number} n The number of arguments the function is expecting
 * @param {Function} f The function we are going to be running with said arguments
 * @param {Any} args The arguments to apply to said function curry wont execute until this length matches n
 * @return {Any} Returns based on the results of the function passed in
 *
 * @example
 *
 * const add = curryN(2, (a, b) => a + b);
 *
 * add(1)(2); // => 3
 * add(1, 2); // => 3
 *
 * const sum = add(1);
 *
 * sum(2); // => 3
 * sum(4); // => 5
 *
 * const add2 = curryN(2, (a, b = 1) => a + b);
 * const sum1 = add(1);
 *
 * sum1(4); // => 5
 * sum1(undefined); // => 2
 */
const curryN = (n, f, ...args) => {
  if (n <= 0) {
    return f(...args)
  }

  return (...rest) => curryN(n - rest.length, f, ...args, ...rest)
}

export default curryN
