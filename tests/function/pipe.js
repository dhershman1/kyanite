import add from '../../src/number/add.js'
import multiply from '../../src/number/multiply.js'
import pipe from '../../src/function/pipe.js'
import test from 'tape'

test('pipe -- Returns value after running pipe', t => {
  t.is(pipe([
    add(2),
    multiply(2)
  ], 10), 24)
  t.end()
})

test('pipe -- Is curried', t => {
  const piper = pipe([add(2), multiply(2)])

  t.is(piper(10), 24)
  t.end()
})

test('pipe -- Handles customized functions', t => {
  const custom = pipe([x => x + 1, x => x * 2])

  t.same([1, 2, 3].map(custom), [4, 6, 8])
  t.same([3, 4, 5].map(custom), [8, 10, 12])
  t.same([10, 11, 12].map(custom), [22, 24, 26])
  t.end()
})
