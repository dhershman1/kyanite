import draft from '../../src/object/draft'
import test from 'tape'

test('draft -- Applies the function to all object values', t => {
  const results = draft(x => x * 2, {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  t.deepEqual(results, {
    a: 2,
    b: 4,
    c: 6,
    d: 8
  })
  t.end()
})

test('draft -- Is curried', t => {
  const p = draft(x => x * 2)
  const results = p({
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  t.deepEqual(results, {
    a: 2,
    b: 4,
    c: 6,
    d: 8
  })
  t.end()
})
