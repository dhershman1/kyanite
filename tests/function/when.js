import test from 'tape'
import when from '../../src/function/when'

const testFn = when(
  x => x > 3,
  x => x * 2
)

test('when -- Returns expected results', t => {
  t.is(testFn(5), 10)
  t.end()
})

test('when -- Gives back undefined if condition not met', t => {
  t.is(testFn(2), undefined)
  t.end()
})
