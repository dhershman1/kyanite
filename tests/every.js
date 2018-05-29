import every from '../src/every'
import test from 'tape'

test('Basic Functionality', t => {
  t.true(every(x => x > 0, [1, 2, 3, 4]))
  t.false(every(x => x > 0, [-1, 0, 1]))
  t.end()
})

test('Test Curried functionality', t => {
  const run = every(x => x < 4)

  t.true(run([1, 2, 3]))
  t.false(run([4, 5, 6]))
  t.end()
})
