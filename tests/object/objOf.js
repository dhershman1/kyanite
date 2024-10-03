import test from 'tape'
import objOf from '../../src/object/objOf.js'

test('objOf -- creates an object with the specified key and value', (t) => {
  const key = 'name'
  const value = 'John'
  const expected = { name: 'John' }

  const result = objOf(key, value)

  t.same(result, expected, 'The object should have the correct key and value')
  t.end()
})

test('objOf -- handles non-string keys', (t) => {
  const key = 123
  const value = 'value'
  const expected = { 123: 'value' }

  const result = objOf(key, value)

  t.same(result, expected, 'The object should handle non-string keys correctly')
  t.end()
})

test('objOf -- handles undefined values', (t) => {
  const key = 'key'
  const value = undefined
  const expected = { key: undefined }

  const result = objOf(key, value)

  t.same(result, expected, 'The object should handle undefined values correctly')
  t.end()
})
