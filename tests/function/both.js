import both from '../../src/function/both'
import prop from '../../src/object/prop'
import test from 'tape'

test('both -- Handles normal functionality', t => {
  const results = both(x => x > 10, x => x < 20, 15)
  const geo = { geometry: [1, 2, 3], coordinates: [34, 56] }

  t.true(results)
  t.same(both(prop('geometry'), prop('coordinates'), geo), [34, 56])
  t.end()
})

test('both -- Is curried', t => {
  const b = both(x => x > 10, x => x < 20)

  t.true(b(15))
  t.false(b(9))
  t.end()
})
