import { test } from 'node:test'
import assert from 'node:assert/strict'
import propEq from '../../src/object/propEq.js'

const abby = { name: 'Abby', age: 7, hair: 'blond' }
const fred = { name: 'Fred', age: 12, hair: 'brown' }
const rusty = { name: 'Rusty', age: 10, hair: 'brown' }
const alois = { name: 'Alois', age: 15, disposition: 'surly' }
const kids = [abby, fred, rusty, alois]

test('propEq -- Basics', () => {
  assert.deepEqual(propEq('hair', 'blond', abby), true)
  assert.deepEqual(kids.filter(propEq('hair', 'brown')), [fred, rusty])
  assert.deepEqual(kids.filter(propEq('age', 10)), [rusty])
})

test('propEq -- Is curried', () => {
  const fn = propEq('hair', 'brown')
  const gn = propEq('age')

  assert.deepEqual(kids.filter(fn), [fred, rusty])
  assert.deepEqual(kids.filter(gn(10)), [rusty])
})
