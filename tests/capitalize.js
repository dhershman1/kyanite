import capitalize from '../src/capitalize'
import test from 'tape'

test('Capitalizes first letter of string', t => {
  t.is(capitalize('test'), 'Test')
  t.end()
})

test('Capitalizes multi word strings', t => {
  t.is(capitalize('small brown cow'), 'Small brown cow')
  t.end()
})

test('Handles empty strings', t => {
  t.is(capitalize(''), '')
  t.end()
})
