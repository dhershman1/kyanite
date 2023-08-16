import capitalize from '../../src/string/capitalize.js'
import test from 'tape'

test('capitalize -- Capitalizes first letter of string', t => {
  t.is(capitalize('test'), 'Test')
  t.end()
})

test('capitalize -- Capitalizes multi word strings', t => {
  t.is(capitalize('small brown cow'), 'Small brown cow')
  t.end()
})

test('capitalize -- Handles empty strings', t => {
  t.is(capitalize(''), '')
  t.end()
})
