import test from 'tape'
import when from '../../src/function/when.js'

test('when -- Handles simple types', t => {
  const testFn = when(x => x > 3, x => x * 2)
  const strTest = when(x => x.length > 3, x => x.length * 2)

  t.is(testFn(5), 10)
  t.is(testFn(2), 2)
  t.is(strTest('foobar'), 12)
  t.is(strTest('foo'), 'foo')
  t.end()
})

test('when -- Handles array complex types', t => {
  t.same(when(x => x.length === 3, x => x.concat(4), [1, 2, 3]), [1, 2, 3, 4])
  t.end()
})
