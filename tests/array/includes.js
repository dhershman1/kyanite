import includes from '../../src/array/includes'
import test from 'tape'

test('Basic simple functionality', t => {
  const list = [1, 2, 3, 4]

  t.true(includes(2, list))
  t.true(includes(4, list))
  t.end()
})

test('Basic curry functionality', t => {
  const list = [1, 2, 3]
  const checker = includes(3)

  t.true(checker(list))
  t.end()
})

test('Returns false for invalid type comparisons', t => {
  t.false(includes('1', [1]))
  t.end()
})
