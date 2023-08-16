import on from '../../src/function/on.js'
import test from 'tape'

test('on -- Returns value based on return of the first function', t => {
  const results = on((x, y) => x === y, x => x.length, 'you', 'are')

  t.same(results, true)
  t.end()
})

test('on -- Returns based on the first functions result', t => {
  const results = on((x, y) => x === y, x => x.length, '', 'are')

  t.same(results, false)
  t.end()
})

test('on -- Is curried', t => {
  const f = on((x, y) => x === y, x => x.length)

  t.same(f('you', 'are'), true)
  t.same(f('', 'a'), false)
  t.end()
})
