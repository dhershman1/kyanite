import has from '../src/has'
import test from 'tape'

test('Test has()', t => {
  t.ok(has('test', { test: 1 }), 'Has test')
  t.notOk(has('test', { cool: 1 }), 'Does not have test')
  t.end()
})

test('Test curried has', t => {
  const hasProp = has('test')

  t.ok(hasProp({ test: 1 }))
  t.notOk(hasProp({ cool: 1 }))
  t.end()
})

test('It does not check props from the prototype chain', t => {
  const Person = function () {
    Array.isArray([])
  }

  Person.prototype.age = 10
  const bob = new Person()

  t.false(has('age', bob))
  t.end()
})
