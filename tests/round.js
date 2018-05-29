import round from '../src/round'
import test from 'tape'

test('Returns value with no round up or down', t => {
  t.is(round(2, 112.332), 112.33)
  t.end()
})

test('Returns value rounded up', t => {
  t.is(round(2, 112.335), 112.34)
  t.end()
})

test('Is curried', t => {
  const rounder = round(2)

  t.is(rounder(112.445), 112.45)
  t.end()
})
