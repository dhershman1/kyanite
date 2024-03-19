import any from '../../src/object/any.js'
import test from 'tape'

const result = any({
  x: v => v > 10,
  y: v => v < 25
})

test('any -- returns true for passing objects with all passing props', t => {
  t.true(result({ x: 11, y: 20 }))
  t.end()
})

test('any -- returns true for passing objects with some passing props', t => {
  t.true(result({ x: 9, y: 20 }))
  t.end()
})

test('any -- returns false for passing objects with no passing props', t => {
  t.false(result({ x: 9, y: 26 }))
  t.end()
})
