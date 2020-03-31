import test from 'tape'
import converge from '../../src/function/converge'

function sum (nums) {
  return nums.reduce((acc, v) => acc + v, 0)
}

function length (list) {
  return list.length
}

function divide (a, b) {
  return a / b
}

test('converge() -- Basic', t => {
  const average = converge(divide, [sum, length], [1, 2, 3, 4, 5, 6, 7])

  t.same(average, 4, 'Gets the average of 4 from the array')
  t.end()
})

test('converge() -- Is curried', t => {
  const fn = converge(divide, [sum, length])
  const interchange = converge(divide)

  t.same(typeof interchange, 'function', 'Interchange is a function')
  t.same(typeof interchange([sum, length]), 'function', 'Calling interchange with 1 param returns function')
  t.same(typeof fn, 'function', 'fn is a function')
  t.same(interchange([sum, length], [1, 2, 3]), 2, 'Giving 2 params to interchange runs the converge function fully')
  t.same(fn([1, 2, 3, 4, 5, 6, 7]), 4, 'Average of 4')
  t.same(fn([1, 2, 3]), 2, 'Average of 2')
  t.same(fn([90, 47, 20, 13, 12]), 36.4, 'Average of 36.4')
  t.end()
})
