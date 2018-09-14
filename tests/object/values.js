import test from 'tape'
import values from '../../src/object/values'

test('values -- Grabs the values of our objects', t => {
  const results = values({
    a: 1,
    b: 2,
    c: 3
  })

  t.same(results, [1, 2, 3])
  t.end()
})

test('values -- Handles more complex objects', t => {
  const results = values({
    a: { b: 1 },
    c: { d: 2 },
    e: 3
  })

  t.same(results, [{ b: 1 }, { d: 2 }, 3])
  t.end()
})
