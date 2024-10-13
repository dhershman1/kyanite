import test from 'tape'
import inc from '../../src/number/inc.js'

test('inc -- Increments a number', t => {
  t.same(inc(1), 2)
  t.same(inc(inc(1)), 3)
  t.end()
})
