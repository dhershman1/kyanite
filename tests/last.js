import last from '../src/last'
import test from 'tape'

test('test last() Array functionality', t => {
  const list = [1, 2, 3, 4]

  t.is(last(list), 4)
  t.end()
})

test('test last() String functionality', t => {
  const str = 'abcd'

  t.is(last(str), 'd')
  t.end()
})
