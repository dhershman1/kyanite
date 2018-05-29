import plan from '../src/plan'
import test from 'tape'

const testFns = {
  a: x => x * 2,
  b: x => x + 10
}

test('Applies the schema functions accordingly', t => {
  const results = plan(testFns, {
    a: 2,
    b: 15
  })

  t.deepEqual(results, { a: 4, b: 25 })
  t.end()
})

test('Is curried', t => {
  const p = plan(testFns)
  const results = p({ a: 5, b: 10 })

  t.deepEqual(results, { a: 10, b: 20 })
  t.end()
})

test('Handles missing properties', t => {
  const results = plan(testFns, { a: 5 })

  t.deepEqual(results, { a: 10 })
  t.end()
})

test('Handles if the object has the own prop', t => {
  const data = {
    id: 123,
    firstName: '   Test ',
    data: {
      elapsed: 100,
      remaining: 1000
    }
  }
  const result = plan({
    firstName: x => x.trim(),
    lastName: x => x.trim(),
    data: plan({
      elapsed: x => x + 1,
      remaining: x => x - 1
    })
  })

  t.same(result(data), {
    id: 123,
    firstName: 'Test',
    data: {
      elapsed: 101,
      remaining: 999
    }
  })
  t.end()
})
