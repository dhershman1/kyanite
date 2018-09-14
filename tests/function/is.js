import is from '../../src/function/is'
import test from 'tape'

test('is -- Test simple types functionality', t => {
  t.true(is(String, ''))
  t.true(is(Number, 0))
  t.true(is(Boolean, true))
  t.end()
})

test('is -- Test complex types functionality', t => {
  t.true(is(Function, a => a))
  t.true(is(Object, {}))
  t.true(is(Array, []))
  t.true(is(RegExp, /[0-9]/g))
  t.end()
})

test('is -- Does not coerce', t => {
  t.false(is(Boolean, 1))
  t.false(is(Number, '1'))
  t.false(is(Number, false))
  t.end()
})

test('is -- Recognizes primitives as their object equivilents', t => {
  t.true(is(Boolean, false))
  t.true(is(Number, 0))
  t.true(is(String, ''))
  t.end()
})

test('is -- Should now consider primitives to be part of an object', t => {
  t.false(is(Object, false))
  t.false(is(Object, 0))
  t.false(is(Object, ''))
  t.end()
})

test('is -- Custom constructors work', t => {
  const Dog = function () {
    this.name = 'Fido'
    this.breed = 'Greyhound'
    this.age = 2
  }

  t.true(is(Dog, new Dog()))
  t.end()
})

test('is -- Custom broad constructors pass', t => {
  const Animal = function (name, breed, age) {
    this.name = name
    this.breed = breed
    this.age = age
  }

  t.true(is(Animal, new Animal('George', 'Cat', 1)))
  t.true(is(Animal, new Animal('Graders', 'Dog', 4)))
  t.true(is(Animal, new Animal('That Dude', 'Human', 32)))
  t.true(is(Object, new Animal('That Dude', 'Human', 32)))
  t.false(is(Array, new Animal('That Dude', 'Human', 32)))
  t.end()
})

test('is -- It\'s curried & considers almost everything as an object', t => {
  const isObj = is(Object)

  t.true(isObj({}))
  t.true(isObj([]))
  t.true(isObj((function () { return arguments })()))
  t.true(isObj(new Boolean(false)))
  t.true(isObj(new Date()))
  t.true(isObj(new Number(0)))
  t.true(isObj(function () { }))
  t.true(isObj(/(?:)/))
  t.true(isObj(new String('')))
  t.false(isObj(''))
  t.false(isObj(1))
  t.false(isObj(false))
  t.end()
})
