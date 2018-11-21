import test from 'tape'
import match from '../../src/string/match'

test('match -- Matches strings', t => {
  t.same(match(/([a-z]a)/g, 'bananas'), ['ba', 'na', 'na'])
  t.same(match(/a/, 'b'), null)
  t.end()
})

test('match -- Is curried', t => {
  const fn = match(/([a-z]a)/g)

  t.same(fn('bananas'), ['ba', 'na', 'na'])
  t.same(fn('why'), null)
  t.end()
})
