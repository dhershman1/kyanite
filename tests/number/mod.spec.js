import test from 'tape'
import mod from '../../src/number/mod.js'

test('mod -- Basic functionality', t => {
  t.same(mod(-5, 4), 3)
  t.same(mod(-17, 5), 3)
  t.same(mod(17, 5), 2)
  t.same(Number.isNaN(mod(17, -5)), true)
  t.same(Number.isNaN(mod(17, 0)), true)
  t.same(Number.isNaN(mod(17.2, 5)), true)
  t.same(Number.isNaN(mod(17, 5.3)), true)
  t.end()
})

test('mod -- Is curried', t => {
  const fn = mod(17)

  t.same(fn(5), 2)
  t.same(Number.isNaN(fn(-5)), true)
  t.same(Number.isNaN(fn(0)), true)
  t.same(Number.isNaN(fn(5.3)), true)
  t.end()
})
