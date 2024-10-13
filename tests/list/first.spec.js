import first from '../../src/list/first.js'
import test from 'tape'

test('first -- test first() Array functionality', t => {
  const list = [1, 2, 3, 4]

  t.is(first(list), 1)
  t.end()
})

test('first -- test first() String functionality', t => {
  const str = 'abcd'

  t.is(first(str), 'a')
  t.end()
})
