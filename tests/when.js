import test from 'tape'
import when from '../src/when'

const testFn = when(
  x => x > 3,
  x => x * 2
)

test('Returns expected results', t => {
  t.is(testFn(5), 10)
  t.end()
})

test('Gives back undefined if condition not met', t => {
  t.is(testFn(2), undefined)
  t.end()
})
