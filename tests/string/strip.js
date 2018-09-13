import strip from '../../src/string/strip'
import test from 'tape'

test('strip -- Removes all Whitespace', t => {
  t.same(strip('I am squished'), 'Iamsquished')
  t.same(strip('I - have - special - chars-cool'), 'I-have-special-chars-cool')
  t.end()
})
