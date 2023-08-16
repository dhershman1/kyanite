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

test('update -- Is curried', t => {
  t.deepEqual(update(2)(10)([0, 1, 2, 3]), [0, 1, 10, 3])
  t.end()
})
