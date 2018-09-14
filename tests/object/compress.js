import compress from '../../src/object/compress'
import has from '../../src/object/has'
import test from 'tape'

test('compress -- Removes undefined values', t => {
  const results = compress({
    test: undefined,
    cool: 'thing',
    not: 'removed'
  })

  t.false(has('test', results))
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
  t.end()
})

test('compress -- Removes null values', t => {
  const results = compress({
    test: null,
    cool: 'thing',
    not: 'removed'
  })

  t.false(has('test', results))
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
  t.end()
})

test('compress -- Skips falsy value like empty string', t => {
  const results = compress({
    test: '',
    cool: 'thing',
    not: 'removed'
  })

  t.true(has('test', results))
  t.is(results.test, '')
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
  t.end()
})

test('compress -- Skips falsy value like a number zero', t => {
  const results = compress({
    test: 0,
    cool: 'thing',
    not: 'removed'
  })

  t.true(has('test', results))
  t.is(results.test, 0)
  t.is(results.cool, 'thing')
  t.is(results.not, 'removed')
  t.end()
})
