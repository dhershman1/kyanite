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
