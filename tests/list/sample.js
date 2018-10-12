import test from 'tape'
import sample from '../../src/list/sample'

test('sample -- Basic random functionality', t => {
  const str = 'abcdefghijklmnop'
  const arr = ['pony', 'unicorn', 'rainbow']

  t.same(str.includes(sample(str)), true)
  t.same(arr.includes(sample(arr)), true)
  t.end()
})
