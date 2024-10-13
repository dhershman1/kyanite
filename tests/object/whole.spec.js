import test from 'tape'
import whole from '../../src/object/whole.js'

const result = whole({
  a: x => x === 'foo',
  b: x => x !== 'bar',
  x: x => x > 10,
  y: x => x < 20
})

test('whole -- predicate is true', t => {
  t.is(result({ a: 'foo', b: 'xxx', x: 11, y: 19 }), true)
  t.end()
})

test('whole -- predicate is false', t => {
  t.is(result({ a: 'xxx', b: 'xxx', x: 11, y: 19 }), false)
  t.end()
})

test('whole -- validate all props exist', t => {
  const fn = whole({
    a: x => x,
    b: x => x
  })

  t.same(fn({ a: 1 }), false)
  t.end()
})
