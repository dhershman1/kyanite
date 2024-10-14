import test from 'tape'
import omitBy from '../../src/object/omitBy.js'

test('Basic Omit', t => {
  const original = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }
  const expected = { a: 1, b: 2 }

  t.same(omitBy(x => x < 3, original), expected, 'Omitted out values that did not pass our pred')
  t.same(original.c, 3, 'Original still has c value')
  t.same(original.d, 4, 'Original still has d value')
  t.end()
})
