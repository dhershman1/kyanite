import pluck from '../src/pluck'
import test from 'tape'

test('Works with Objects', t => {
  t.deepEqual(pluck('a', [{ a: 1 }, { a: 2 }]), [1, 2])
  t.deepEqual(pluck('val', { a: { val: 3 }, b: { val: 5 } }), [3, 5])
  t.end()
})

test('Works with heavily nested Objects', t => {
  t.deepEqual(pluck('thing', { a: { val: { thing: 3 } }, b: { val: { thing: 5 } } }), [3, 5])
  t.end()
})

test('is Curried', t => {
  const plucker = pluck('a')

  t.deepEqual(plucker([{ a: 1 }, { a: 2 }]), [1, 2])
  t.end()
})

test('Handles when a value is the same as the prop', t => {
  t.deepEqual(pluck('a', { k: 'k' }), [])
  t.end()
})
