import test from 'tape'
import size from '../../src/function/size'

test('size -- Handles Maps', t => {
  t.same(size(new Map([['a', 1]])), 1)
  t.same(size(new Map()), 0)
  t.end()
})

test('size -- Handles Sets', t => {
  t.same(size(new Set([1, 2, 3])), 3)
  t.same(size(new Set()), 0)
  t.end()
})
