import test from 'tape'
import differenceBy from '../../src/array/differenceBy'

const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }]
const l2 = [{ a: 3 }, { a: 4 }]

test('differenceBy -- Basic functionality', t => {
  t.same(differenceBy(x => x.a, [l1, l2]), [{ a: 1 }, { a: 2 }, { a: 4 }])
  t.same(differenceBy(x => x.a, [l2, l1]), [{ a: 4 }, { a: 1 }, { a: 2 }])
  t.end()
})

test('differenceBy -- Is curried', t => {
  const fn = differenceBy(x => x.a)

  t.same(fn([l1, l2]), [{ a: 1 }, { a: 2 }, { a: 4 }])
  t.same(fn([l2, l1]), [{ a: 4 }, { a: 1 }, { a: 2 }])
  t.end()
})
