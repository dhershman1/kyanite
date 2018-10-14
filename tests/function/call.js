import call from '../../src/function/call'
import test from 'tape'

test('call -- Basic functionality', t => {
  t.same(call(x => x * 2, 2), 4)
  t.same(call(x => x[0], [1, 2, 3]), 1)
  t.end()
})

test('call -- Is curried', t => {
  const fn = call(x => x * 2)

  t.same(fn(2), 4)
  t.same(fn(4), 8)
  t.same(fn(100), 200)
  t.end()
})
