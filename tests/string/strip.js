import strip from '../../src/string/strip'
import test from 'tape'

test('Removes all Whitespace', t => {
  t.same(strip('I am squished'), 'Iamsquished')
  t.end()
})
