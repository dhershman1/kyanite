import assign from '../../src/object/assign'
import test from 'tape'

test('assign -- Handle single level object', t => {
  t.same(assign({}, { a: 1 }), { a: 1 })
  t.end()
})

test('assign -- Test base functionality', t => {
  const compare = {
    test: 1,
    again: 2
  }
  const result = assign({ test: 1 }, { again: 2 })

  t.same(compare, result)
  t.end()
})

test('assign -- Overwrite matching properties', t => {
  const results = assign({
    a: 1,
    b: 2,
    c: 3
  }, {
    c: 5,
    d: 3
  })

  t.same(results, {
    a: 1,
    b: 2,
    c: 5,
    d: 3
  })
  t.end()
})

test('assign -- Test with more complex objects', t => {
  const compare = {
    test: 1,
    again: 2,
    anotherOne: 3
  }
  const result = assign({ test: 1 }, {
    again: 2,
    anotherOne: 3
  })

  t.same(compare, result)
  t.end()
})

test('assign -- Test with nested objects', t => {
  const compare = {
    test: 1,
    again: 2,
    anotherOne: 3,
    nested: {
      thing: 1,
      forecast: 23
    }
  }
  const result = assign({ test: 1 }, {
    again: 2,
    anotherOne: 3
  }, {
    nested: {
      thing: 1,
      forecast: 23
    }
  })

  t.same(compare, result)
  t.end()
})

test('assign -- Handles any number of objects passed in', t => {
  const results = assign({ a: 1 }, { b: 2 }, { c: 5 }, { c: 3 }, { d: 4 })

  t.same(results, {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })
  t.end()
})

test('assign -- Handles values that do not own the prop', t => {
  const Person = function () {
    Array.isArray([])
  }

  Person.prototype.age = 10
  const bob = new Person()

  const results = assign({ a: 1 }, bob)

  t.same(results, {
    a: 1
  })
  t.end()
})

test('assign -- Does not mutate original object', t => {
  const obj = { a: 1, b: 2 }
  const clone = assign({}, obj, { a: 3, b: 4 })

  t.same(obj, { a: 1, b: 2 })
  t.same(clone, { a: 3, b: 4 })

  clone.a = 5

  t.same(obj, { a: 1, b: 2 })
  t.same(clone, { a: 5, b: 4 })
  t.end()
})

test('assign -- Does not carry over prototyped properties', t => {
  const Person = function () {
    this.name = 'Bob'
  }

  Person.prototype.age = 10
  Person.prototype.checkAge = function () {
    return this.age
  }

  const bob = new Person()

  t.same(assign({}, bob), { name: 'Bob' })
  t.end()
})

// test('assign -- It is curried', t => {
//   const extend = assign({ a: 1, b: 2 })

//   t.same(extend({ c: 3, d: 4 }), { a: 1, b: 2, c: 3, d: 4 })
//   t.same(extend({ a: 2, b: 3 }), { a: 2, b: 3 })
//   t.end()
// })
