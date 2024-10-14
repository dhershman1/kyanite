import maxBy from '../../src/array/maxBy.js'
import test from 'tape'

test('maxBy -- Grabs the max number', t => {
  const result = maxBy(x => x.size, [{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  t.same(result, { size: 6 })
  t.end()
})

test('maxBy -- Grabs the max letter', t => {
  const result = maxBy(x => x.alpha, [{ alpha: 'b' }, { alpha: 'c' }, { alpha: 'a' }])

  t.same(result, { alpha: 'c' })
  t.end()
})

test('maxBy -- It is curried', t => {
  const m = maxBy(x => x.size)
  const result = m([{ size: 4 }, { size: 2 }, { size: 6 }, { size: 3 }])

  t.same(result, { size: 6 })
  t.end()
})
