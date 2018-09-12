import pluck from '../../src/object/pluck'
import test from 'tape'

test('pluck -- Works with Objects', t => {
  t.deepEqual(pluck('a', [{ a: 1 }, { a: 2 }]), [1, 2])
  t.deepEqual(pluck('val', { a: { val: 3 }, b: { val: 5 } }), [3, 5])
  t.end()
})

test('pluck -- Works with heavily nested Objects', t => {
  t.deepEqual(pluck('thing', { a: { val: { thing: 3 } }, b: { val: { thing: 5 } } }), [3, 5])
  t.end()
})

test('pluck -- is Curried', t => {
  const plucker = pluck('a')

  t.deepEqual(plucker([{ a: 1 }, { a: 2 }]), [1, 2])
  t.end()
})

test('pluck -- Handles when a value is the same as the prop', t => {
  t.deepEqual(pluck('a', { k: 'k' }), [])
  t.end()
})
