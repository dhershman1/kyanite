import add from '../../src/number/add'
import mul from '../../src/number/mul'
import pipe from '../../src/function/pipe'
import test from 'tape'

test('Returns value after running pipe', t => {
  t.is(pipe([add(2), mul(2)], 10), 24)
  t.end()
})

test('Is curried', t => {
  const piper = pipe([add(2), mul(2)])

  t.is(piper(10), 24)
  t.end()
})

test('Handles customized functions', t => {
  const custom = pipe([x => x + 1, x => x * 2])

  t.same([1, 2, 3].map(custom), [4, 6, 8])
  t.same([3, 4, 5].map(custom), [8, 10, 12])
  t.same([10, 11, 12].map(custom), [22, 24, 26])
  t.end()
})
