import entries from '../../src/object/entries'
import test from 'tape'

test('Returns key value pairs as an array of arrays', t => {
  const results = entries({
    a: 1,
    b: 2,
    c: 3
  })

  t.deepEqual(results, [['a', 1], ['b', 2], ['c', 3]])
  t.end()
})
