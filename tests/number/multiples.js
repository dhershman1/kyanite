import test from 'tape'
import multiples from '../../src/number/multiples'

test('multiples -- Basic math', t => {
  t.same(multiples(100, 6), [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96])
  t.same(multiples(100, 5), [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
  t.end()
})

test('multiples -- is curried', t => {
  const fn = multiples(100)

  t.same(fn(6), [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96])
  t.same(fn(5), [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
  t.end()
})

test('multiples -- larger limits', t => {
  const result = multiples(10000, 10)
  const res2 = multiples(10000000, 10)

  t.ok(result)
  t.same(result.length, 1001)
  t.same(result[result.length - 1], 10000)
  t.same(res2.length, 1000001)
  t.same(res2[res2.length - 1], 10000000)
  t.end()
})

// test('timer', t => {
//   console.time('multi')
//   multiples(200000000, 5)
//   console.timeEnd('multi')

//   t.ok(true)
//   t.end()
// })
