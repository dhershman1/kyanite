import contains from '../../src/string/contains'
import test from 'tape'

test('contains -- Returns true for basic strings', t => {
  t.true(contains('cow', 'small brown cow'))
  t.end()
})

test('contains -- Works with string templates', t => {
  const x = 'cow'

  t.true(contains('cow', `small brown ${x}`))
  t.end()
})

test('contains -- Is Curried', t => {
  const checker = contains('cow')
  const x = 'cow'

  t.true(checker('small brown cow'))
  t.true(checker(`small brown ${x}`))
  t.end()
})
