import test from 'tape'
import whole from '../src/whole'

const result = whole({
  a: x => x === 'foo',
  b: x => x !== 'bar',
  x: x => x > 10,
  y: x => x < 20
})

test('object whole: predicate is true', t => {
  t.is(result({ a: 'foo', b: 'xxx', x: 11, y: 19 }), true)
  t.end()
})

test('object whole: predicate is false', t => {
  t.is(result({ a: 'xxx', b: 'xxx', x: 11, y: 19 }), false)
  t.end()
})
