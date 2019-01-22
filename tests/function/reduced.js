import test from 'tape'
import reduce from '../../src/function/reduce'
import reduced from '../../src/function/reduced'

test('reduced -- Basic functionality (mimiced from reduce)', t => {
  const tmp = [1, 2, 3, 4, 5]

  t.same(reduce((item, acc) => item > 3 ? reduced(acc) : acc.concat(item), [], tmp), [1, 2, 3])
  t.same(reduce((x, acc) => acc.length === 3 ? reduced(acc) : acc.concat(x * 2), [], tmp), [2, 4, 6])
  t.end()
})

test('reduced -- Test directly', t => {
  const x = {
    '@@transducer/reduced': true
  }

  t.same(reduced(x), x)
  t.end()
})
