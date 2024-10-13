import reduce from '../../src/function/reduce.js'
import reduced from '../../src/function/reduced.js'
import test from 'tape'

test('reduce -- Basic Functionality', t => {
  t.is(reduce((n, acc) => acc + n, 0, [1, 2, 3, 4, 5]), 15)
  t.deepEqual(reduce((n, acc) => {
    if (typeof n === 'number') {
      acc.push(n)
    }

    return acc
  }, [], ['', 1, 2, '0', 3]), [1, 2, 3])
  t.end()
})

test('reduce() with maps', t => {
  const data = new Map([['a', 1], ['b', 2], ['c', 3]])
  const results = reduce((val, acc) => {
    acc.push(val)

    return acc
  }, [], data)

  t.same(results, [['a', 1], ['b', 2], ['c', 3]])
  t.end()
})

test('reduce() with Sets', t => {
  const data = new Set([1, 2, 3, 4])
  const results = reduce((val, acc) => acc.concat(val * 2), [], data)

  t.same(results, [2, 4, 6, 8])
  t.end()
})

test('reduce -- Is curried', t => {
  const r = reduce((n, acc) => acc + n, 0)

  t.is(r([1, 2, 3, 4, 5]), 15)
  t.end()
})

test('reduce -- Understands how to use reduced', t => {
  const tmp = [1, 2, 3, 4, 5]

  t.same(reduce((item, acc) => item > 3 ? reduced(acc) : acc.concat(item), [], tmp), [1, 2, 3])
  t.same(reduce((x, acc) => acc.length === 3 ? reduced(acc) : acc.concat(x * 2), [], tmp), [2, 4, 6])
  t.end()
})

test('reduce -- Handling Set data types', t => {
  const fn = reduce((x, acc) => x > 3 ? reduced(acc) : acc.concat(x), [])

  t.same(fn(new Set([1, 2, 3, 4, 5])), [1, 2, 3])
  t.end()
})

test('reduce -- Handling Map data types', t => {
  const fn = reduce(([k, v], acc) => k === 'c' ? reduced(acc) : acc.concat(v), [])

  t.same(fn(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]])), [1, 2])
  t.end()
})
