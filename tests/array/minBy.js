import minBy from '../../src/array/minBy'
import test from 'tape'

test('Grabs the max number', t => {
  const result = minBy(x => x.size, [{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  t.same(result, { size: 2 })
  t.end()
})

test('Grabs the max letter', t => {
  const result = minBy(x => x.alpha, [{ alpha: 'b' }, { alpha: 'c' }, { alpha: 'a' }])

  t.same(result, { alpha: 'a' })
  t.end()
})

test('It is curried', t => {
  const m = minBy(x => x.size)
  const result = m([{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  t.same(result, { size: 2 })
  t.end()
})
