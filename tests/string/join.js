import join from '../../src/string/join'
import test from 'tape'

test('Joins an array together', t => {
  const results = join(' ', ['test', 'this', 'thing'])

  t.same(results, 'test this thing')
  t.end()
})

test('It is curried', t => {
  const j = join(' ')
  const results = j(['test', 'this', 'thing'])

  t.same(results, 'test this thing')
  t.end()
})
