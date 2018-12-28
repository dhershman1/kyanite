import odd from '../../src/number/odd'
import test from 'tape'

test('odd -- Checks numbers for odds', t => {
  t.true(odd(1))
  t.true(odd(3))
  t.true(odd(15))
  t.false(odd(2))
  t.false(odd(4))
  t.false(odd(NaN))
  t.false(odd('h'))
  t.end()
})
