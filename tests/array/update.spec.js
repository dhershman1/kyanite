import update from '../../src/array/update.js'
import test from 'tape'

test('update -- updates value at index', t => {
  const result = update(2, 10, [0, 1, 2, 3])

  t.deepEqual(result, [0, 1, 10, 3])
  t.end()
})

test('update -- Handles string based arrays', t => {
  t.deepEqual(update(1, 'haha', ['foo', 'bar', 'bax']), ['foo', 'haha', 'bax'])
  t.end()
})

test('update -- It only updates the index it was told', t => {
  t.deepEqual(update(1, 10, [0, 1, 1, 2, 2, 3]), [0, 10, 1, 2, 2, 3])
  t.end()
})

test('update -- Works with negative index', t => {
  t.same(update(-1, 10, [0, 2, 3, 4]), [0, 2, 3, 10], 'Updated last index value')
  t.same(update(-3, 10, [0, 2, 3, 4]), [0, 10, 3, 4], 'Updated second index value')
  t.end()
})

test('update -- Safely gives back list when index out of bounds', t => {
  t.same(update(5, 10, [0, 1, 2]), [0, 1, 2], 'Gave back list when postivie out of bounds')
  t.same(update(-5, 10, [0, 1, 2]), [0, 1, 2], 'Gave back list when negative out of bounds')
  t.end()
})

test('update -- Is curried', t => {
  t.deepEqual(update(2)(10)([0, 1, 2, 3]), [0, 1, 10, 3])
  t.end()
})
