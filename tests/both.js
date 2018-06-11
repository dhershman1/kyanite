import both from '../src/both'
import test from 'tape'

test('Handles normal functionality', t => {
  const results = both(x => x > 10, x => x < 20, 15)

  t.true(results)
  t.end()
})

test('Is curried', t => {
  const b = both(x => x > 10, x => x < 20)

  t.true(b(15))
  t.false(b(9))
  t.end()
})
