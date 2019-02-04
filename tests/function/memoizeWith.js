import test from 'tape'
import memoizeWith from '../../src/function/memoizeWith'
import identity from '../../src/function/identity'
import range from '../../src/number/range'

const product = arr => arr.reduce((x, acc) => acc * x)

test('memoizeWith -- Basic functionality', t => {
  let count = 0
  const factorial = memoizeWith(identity, n => {
    count += 1

    return product(range(1, n + 1))
  })
  const res = factorial(5)

  t.same(res, 120, 'Facotrial returned 120')
  t.same(factorial(5), 120, 'Still returned 120 on 2nd call')
  t.same(count, 1, 'Count is still 1 after 2nd call')
  t.end()
})
