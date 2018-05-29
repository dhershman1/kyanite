import contains from '../src/contains'
import test from 'tape'

test('Basic simple functionality', t => {
  const list = [1, 2, 3, 4]

  t.true(contains(2, list))
  t.true(contains(4, list))
  t.end()
})

test('Basic curry functionality', t => {
  const list = [1, 2, 3]
  const checker = contains(3)

  t.true(checker(list))
  t.end()
})

test('Returns false for invalid type comparisons', t => {
  t.false(contains('1', [1]))
  t.end()
})
