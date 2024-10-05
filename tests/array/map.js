import test from 'tape'
import _toString from '../_helpers/_toString.js'
import listXf from '../_helpers/listXf.js'
import map from '../../src/array/map.js'

const dbl = n => n * 2
const add1 = x => x + 1

test('map -- Basic functionality on Arrays', t => {
  t.same(map(dbl, []), [])
  t.same(map(dbl, [1, 2, 3]), [2, 4, 6])
  t.end()
})

test('map -- Interprets ((->) r) as Functor', t => {
  const f = function (a) { return a - 1 }
  const g = function (b) { return b * 2 }
  const h = map(f, g)

  t.same(h(10), (10 * 2) - 1)
  t.end()
})

test('map -- Dispatches to obejcts that implement map', t => {
  const obj = { x: 100, map: function (f) { return f(this.x) } }

  t.same(map(add1, obj), 101)
  t.end()
})

test('map -- dispatches to transformer objects', t => {
  t.same(_toString(map(add1, listXf)), _toString({
    f: add1,
    xf: listXf
  }))
  t.end()
})

test('map -- Composes', t => {
  const mdbl = map(dbl)
  const madd1 = map(add1)

  t.same(mdbl(madd1([1, 2, 3])), [4, 6, 8])
  t.end()
})

test('map -- Can compose transducer-style', t => {
  const mdbl = map(dbl)
  const madd1 = map(add1)
  const xcomp = madd1(mdbl(listXf))

  t.same(xcomp.f, add1)
  t.same(_toString(xcomp.xf), _toString({
    xf: listXf,
    f: dbl
  }))
  t.end()
})

test('map -- Test is Curried', t => {
  const dbler = map(dbl)

  t.same(dbler([1, 2, 3, 4]), [2, 4, 6, 8])
  t.end()
})
