import test from 'tape'
import toLower from '../../src/string/toLower.js'

test('toLower -- Transforms provided string', t => {
  t.is(toLower('HI'), 'hi')
  t.is(toLower('TEST.123.HELLO'), 'test.123.hello')
  t.end()
})
