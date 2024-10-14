import split from '../../src/string/split.js'
import test from 'tape'

test('split -- Basic capabilities', t => {
  t.same(split('', 'abc'), ['a', 'b', 'c'])
  t.end()
})

test('split -- Is curried', t => {
  const sp = split('')

  t.same(sp('abc'), ['a', 'b', 'c'])
  t.end()
})
