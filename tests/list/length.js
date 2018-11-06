import length from '../../src/list/length'
import test from 'tape'

test('length -- Returns the length', t => {
  t.is(length([1, 2, 3, 4]), 4)
  t.end()
})

test('length -- Returns zero for empty arrays', t => {
  t.is(length([]), 0)
  t.end()
})
