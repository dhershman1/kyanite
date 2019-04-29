import join from '../../src/array/join'
import test from 'tape'

test('join -- Joins an array together', t => {
  const results = join(' ', ['test', 'this', 'thing'])

  t.same(results, 'test this thing')
  t.end()
})

test('join -- It is curried', t => {
  const j = join(' ')
  const results = j(['test', 'this', 'thing'])

  t.same(results, 'test this thing')
  t.end()
})
