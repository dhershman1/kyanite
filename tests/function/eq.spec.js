import eq from '../../src/function/eq.js'
import test from 'tape'

test('eq -- Test base functionality', t => {
  t.ok(eq(0, 0))
  t.ok(eq('t', 't'))
  t.end()
})

test('eq -- Test boolean types', t => {
  t.ok(eq(false, false))
  t.ok(eq(true, true))
  t.notOk(eq(true, false))
  t.end()
})

test('eq -- Test object types', t => {
  const o = {}

  t.ok(eq(o, o))
  t.notOk(eq({ test: 1 }, { test: 1 }))
  t.notOk(eq({}, {}))
  t.notOk(eq({ test: 1 }, { test: 2 }))
  t.end()
})

test('eq -- Test array types', t => {
  t.notOk(eq([], []))
  t.notOk(eq([1], [1]))
  t.notOk(eq([1], [2]))
  t.end()
})

test('eq -- Test edge case type', t => {
  t.notOk(eq(0, -0))
  t.ok(eq(NaN, NaN))
  t.end()
})

test('eq -- Test curried eq', t => {
  const i = eq(NaN)

  t.ok(i(NaN))
  t.notOk(i({}))
  t.notOk(i(0))
  t.end()
})
