import compose from '../../src/function/compose.js'
import test from 'tape'

test('compose -- Handles basic data', t => {
  t.same(compose(Math.sqrt, x => x + 1, 99), 10)
  t.same(compose(Math.sqrt, x => x + 1, 399), 20)
  t.end()
})

test('compose -- Is curried', t => {
  const comp = compose(Math.sqrt, x => x + 1)

  t.same(comp(99), 10)
  t.same(comp(399), 20)
  t.same(comp(143), 12)
  t.end()
})
