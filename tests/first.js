import first from '../src/first'
import test from 'tape'

test('test first() Array functionality', t => {
  const list = [1, 2, 3, 4]

  t.is(first(list), 1)
  t.end()
})

test('test first() String functionality', t => {
  const str = 'abcd'

  t.is(first(str), 'a')
  t.end()
})
