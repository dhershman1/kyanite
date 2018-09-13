import not from '../../src/function/not'
import test from 'tape'

test('not -- Test not() functionality', t => {
  t.notOk(not(true))
  t.ok(not(false))
  t.notOk(not(1))
  t.ok(not(0))
  t.end()
})
