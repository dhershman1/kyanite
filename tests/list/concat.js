import concat from '../../src/list/concat.js'
import test from 'tape'

test('concat -- Concated items together', t => {
  t.same(concat(4, [1, 2, 3]), [1, 2, 3, 4])
  t.same(concat('bar', 'foo'), 'foobar')
  t.end()
})
