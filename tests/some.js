import some from '../src/some'
import test from 'tape'

test('Basic functionality', t => {
  const runner = x => typeof x === 'string'

  t.ok(some(runner, ['foo', 'bar']))
  t.ok(some(runner, ['foo', 'bar', 1]))
  t.notOk(some(runner, [1, 2, 3]))
  t.end()
})

test('Basic curried functionality', t => {
  const a = some(x => typeof x === 'string')

  t.ok(a(['foo', 'bar']))
  t.ok(a(['foo', 'bar', 1]))
  t.notOk(a([1, 2, 3]))
  t.end()
})

test('Run against objects', t => {
  const runner = ({ val }) => val === 'test'

  t.ok(some(runner, [{ val: 'thing' }, { val: 'test' }]))
  t.notOk(some(runner, [{ val: 'thing' }, { val: 100 }]))
  t.end()
})
