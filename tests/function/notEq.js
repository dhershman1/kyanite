import test from 'tape'
import notEq from '../../src/function/notEq'

test('notEq -- Basics', t => {
  t.same(notEq(1, 2), true)
  t.same(notEq('test', 'Test'), true)
  t.same(notEq(NaN, NaN), false)
  t.same(notEq(1, 1), false)
  t.end()
})

test('notEq -- Is curried', t => {
  const fn = notEq('1')

  t.same(fn(1), true)
  t.same(fn(NaN), true)
  t.same(fn('1'), false)
  t.end()
})
