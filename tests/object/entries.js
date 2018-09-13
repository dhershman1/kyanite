import entries from '../../src/object/entries'
import test from 'tape'

test('entries -- Returns key value pairs as an array of arrays', t => {
  const results = entries({
    a: 1,
    b: 2,
    c: 3
  })

  t.same(results, [['a', 1], ['b', 2], ['c', 3]])
  t.end()
})

test('entries -- Handles a more complicated object', t => {
  const results = entries({
    a: { b: 1 },
    c: { d: 2 },
    e: 3
  })

  t.same(results, [
    ['a', { b: 1 }],
    ['c', { d: 2 }],
    ['e', 3]
  ])
  t.end()
})
