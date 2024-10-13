import test from 'tape'
import trim from '../../src/string/trim.js'

test('trim -- Returns a trimmed string', t => {
  t.is(trim('my brown cow   '), 'my brown cow')
  t.is(trim('   new things   '), 'new things')
  t.end()
})
