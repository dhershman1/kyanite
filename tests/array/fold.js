import test from 'tape'
import fold from '../../src/array/fold'

test('fold -- Basic Functionality', t => {
  t.same(fold((x, acc) => acc + x, [1, 2, 3, 4]), 10)
  t.end()
})
