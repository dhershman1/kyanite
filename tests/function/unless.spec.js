import test from 'tape'
import unless from '../../src/function/unless.js'

test('unless -- Basic usage', t => {
  t.same(unless(x => x > 2, x => x * 2, 5), 5)
  t.same(unless(x => x > 5, x => x * 2, 5), 10)
  t.end()
})

test('unless -- Is curried', t => {
  const un = unless(x => x > 2, x => x * 2)

  t.same(un(5), 5)
  t.same(un(1), 2)
  t.end()
})
