import test from 'tape'
import words from '../../src/string/words'

test('words -- Returns an array of words', t => {
  t.deepEqual(words('my brown cow'), ['my', 'brown', 'cow'])
  t.end()
})

test('words -- Works with template strings', t => {
  const x = 'brown'

  t.deepEqual(words(`my ${x} cow`), ['my', 'brown', 'cow'])
  t.end()
})
