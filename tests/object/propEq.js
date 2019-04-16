import test from 'tape'
import propEq from '../../src/object/propEq'

const abby = { name: 'Abby', age: 7, hair: 'blond' }
const fred = { name: 'Fred', age: 12, hair: 'brown' }
const rusty = { name: 'Rusty', age: 10, hair: 'brown' }
const alois = { name: 'Alois', age: 15, disposition: 'surly' }
const kids = [abby, fred, rusty, alois]

test('propEq -- Basics', t => {
  t.same(propEq('hair', 'blond', abby), true)
  t.same(kids.filter(propEq('hair', 'brown')), [fred, rusty])
  t.same(kids.filter(propEq('age', 10)), [rusty])
  t.end()
})

test('propEq -- Is curried', t => {
  const fn = propEq('hair', 'brown')
  const gn = propEq('age')

  t.same(kids.filter(fn), [fred, rusty])
  t.same(kids.filter(gn(10)), [rusty])
  t.end()
})
