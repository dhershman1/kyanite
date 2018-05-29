import not from '../src/not'
import test from 'tape'

test('Test not() functionality', t => {
  t.notOk(not(true))
  t.ok(not(false))
  t.notOk(not(1))
  t.ok(not(0))
  t.end()
})
