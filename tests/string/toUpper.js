import test from 'tape'
import toUpper from '../../src/string/toUpper.js'

test('toUpper -- Transforms provided string', t => {
  t.is(toUpper('hi'), 'HI')
  t.is(toUpper('test.123.hello'), 'TEST.123.HELLO')
  t.end()
})
