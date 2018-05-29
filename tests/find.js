import find from '../src/find'
import test from 'tape'

test('Test base functionality', t => {
  const result = find(val => val === 1, [2, 32, 1])

  t.ok(result)
  t.is(result, 1)
  t.end()
})

test('Test array of objects functionality', t => {
  const result = find(({ val }) => val === 1, [{ val: 2 }, { val: 32 }, { val: 1 }])

  t.ok(result)
  t.deepEqual(result, { val: 1 })
  t.end()
})

test('Stops at the first value to pass the function', t => {
  const results = find(x => x.val > 2, [{ val: 1 }, { val: 3 }, { val: 4 }])

  t.deepEqual(results, { val: 3 })
  t.end()
})

test('Test curried find', t => {
  const finder = find(({ val }) => val === 1)
  const result = finder([{ val: 2 }, { val: 32 }, { val: 1 }])
  const deeperResults = finder([
    { val: 2 },
    { val: 32 },
    {
      val: 1,
      thing: 2
    },
    { val: 1 }
  ])

  t.ok(result)
  t.deepEqual(result, { val: 1 })
  t.deepEqual(deeperResults, {
    val: 1,
    thing: 2
  })
  t.end()
})

test('Stops at the first element that passes our function', t => {
  const runner = x => x > 100

  t.is(find(runner, [1, 101, 3, 200, 4]), 101)
  t.is(find(runner, [1, 3, 200, 4]), 200)
  t.end()
})

test('Returns false if value not found', t => {
  const runner = x => x > 100

  t.notOk(find(runner, [1, 2, 3, 4]), 'Value not found')
  t.end()
})
