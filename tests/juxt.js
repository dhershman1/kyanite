import juxt from '../src/juxt'
import test from 'tape'

test('Test basic functionality', t => {
  const getRange = juxt([Math.min, Math.max])

  t.deepEqual(getRange(3, 4, 9, -3), [-3, 9])
  t.end()
})

test('Works with no functions and no values', t => {
  t.deepEqual(juxt()(), [])
  t.end()
})

test('Works with no functions and some values', t => {
  t.deepEqual(juxt()(2, 3), [])
  t.end()
})

test('Works with a single function', t => {
  t.deepEqual(juxt([() => 'hello'])(), ['hello'])
  t.end()
})

test('Works with a single function and a single value', t => {
  t.deepEqual(juxt([x => x + 2])(3), [5])
  t.end()
})

test('Works with a function and multiple values', t => {
  t.deepEqual(juxt([(x, y) => x + y])(2, 3), [5])
  t.end()
})

test('Works with multiple functions', t => {
  const testy = () => 5
  const thing = () => 8

  t.deepEqual(juxt([testy, thing])(), [5, 8])
  t.end()
})

test('Works with multiple functions and a single value', t => {
  const add = x => x + 2
  const multiply = x => x * 2

  t.deepEqual(juxt([add, multiply])(2), [4, 4])
  t.end()
})

test('Works with multiple functions and multiple value', t => {
  const add = (x, y) => x + y
  const multiply = (x, y) => x * y

  t.deepEqual(juxt([add, multiply])(2, 3), [5, 6])
  t.end()
})
