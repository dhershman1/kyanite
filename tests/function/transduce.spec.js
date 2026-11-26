import { test } from 'node:test'
import assert from 'node:assert/strict'
import transduce from '../../src/function/transduce.js'
import compose from '../../src/function/compose.js'
import reduced from '../../src/function/reduced.js'
import filter from '../../src/array/filter.js'
import map from '../../src/array/map.js'
import take from '../../src/array/take.js'

const isEven = n => n % 2 === 0
const sum = (n, acc) => acc + n
const append = (n, acc) => acc.concat(n)

function * naturals () {
  let n = 1

  while (true) {
    yield n++
  }
}

test('transduce -- Runs values through the transducers in order', () => {
  assert.equal(transduce([map(n => n + 1), filter(isEven)], sum, 0, [1, 2, 3, 4]), 6)
  assert.deepEqual(transduce([filter(isEven), map(n => n + 1)], append, [], [1, 2, 3, 4]), [3, 5], 'Order changes the result')
})

test('transduce -- Takes a single transducer without an array', () => {
  assert.deepEqual(transduce(map(n => n * 2), append, [], [1, 2, 3]), [2, 4, 6])
})

test('transduce -- An empty array of transducers just reduces', () => {
  assert.equal(transduce([], sum, 0, [1, 2, 3]), 6)
})

test('transduce -- Works with compose, which runs two transducers left to right', () => {
  assert.deepEqual(transduce(compose(map(n => n * 2), take(2)), append, [], [1, 2, 3]), [2, 4])
})

test('transduce -- Each value goes through every step before the next value starts', () => {
  const seen = []
  const log = label => map(x => {
    seen.push(`${label}${x}`)
    return x
  })

  transduce([log('a'), log('b')], append, [], [1, 2])
  assert.deepEqual(seen, ['a1', 'b1', 'a2', 'b2'])
})

test('transduce -- Stops reading the list once take has enough', () => {
  let calls = 0
  const result = transduce([map(x => {
    calls++
    return x * 2
  }), take(2)], append, [], [1, 2, 3, 4, 5])

  assert.deepEqual(result, [2, 4])
  assert.equal(calls, 2, 'map only ran for the values take needed')
})

test('transduce -- Works with any iterable, including endless generators', () => {
  assert.equal(transduce([filter(isEven), take(3)], sum, 0, naturals()), 12)
  assert.deepEqual(transduce([map(n => n * 2)], append, [], new Set([1, 2, 2])), [2, 4])
  assert.equal(transduce([map(c => c.toUpperCase())], (c, acc) => acc + c, '', 'abc'), 'ABC')
})

test('transduce -- The reducer can stop early with reduced', () => {
  assert.equal(transduce([map(n => n * 10)], (n, acc) => acc >= 30 ? reduced(acc) : acc + n, 0, naturals()), 30)
})

test('transduce -- Is curried', () => {
  const xf = [take(2)]

  assert.equal(transduce(xf)(sum)(0)([5, 10, 15]), 15)
  assert.equal(transduce(xf)(sum)(0, [5, 10, 15]), 15)
  assert.equal(transduce(xf)(sum, 0)([5, 10, 15]), 15)
  assert.equal(transduce(xf)(sum, 0, [5, 10, 15]), 15)
  assert.equal(transduce(xf, sum)(0)([5, 10, 15]), 15)
  assert.equal(transduce(xf, sum)(0, [5, 10, 15]), 15)
  assert.equal(transduce(xf, sum, 0)([5, 10, 15]), 15)
})

test('transduce -- Stateful transducers start fresh on every run', () => {
  const firstTwo = transduce([take(2)], append, [])

  assert.deepEqual(firstTwo([1, 2, 3]), [1, 2])
  assert.deepEqual(firstTwo([4, 5, 6]), [4, 5])
})

// A transducer and a transformer written the way any library following the protocol would
const protocolDouble = xf => ({
  '@@transducer/init': () => xf['@@transducer/init'](),
  '@@transducer/step': (acc, x) => xf['@@transducer/step'](acc, x * 2),
  '@@transducer/result': acc => xf['@@transducer/result'](acc)
})

test('transduce -- Works with transducers from other libraries', () => {
  assert.deepEqual(transduce([protocolDouble, filter(n => n > 2)], append, [], [1, 2, 3]), [4, 6])
})

test('transduce -- Takes a transformer as the reducer, and calls its result at the end', () => {
  const steps = []
  const collect = {
    '@@transducer/init': () => [],
    '@@transducer/step': (acc, x) => {
      steps.push([acc.length, x])
      return [...acc, x]
    },
    '@@transducer/result': acc => acc.join('-')
  }

  assert.equal(transduce([map(n => n + 1), take(2)], collect, [], [1, 2, 3]), '2-3')
  assert.deepEqual(steps, [[0, 2], [1, 3]], 'step is called with the accumulator first')
})

test('transduce -- Kyanite transducers pass init through to the reducer', () => {
  const xform = map(n => n)({
    '@@transducer/init': () => 'started',
    '@@transducer/step': acc => acc,
    '@@transducer/result': acc => acc
  })

  assert.equal(xform['@@transducer/init'](), 'started')
})

test('transduce -- A plain reducer has no init to give', () => {
  let init

  transduce([xf => {
    init = xf['@@transducer/init']
    return xf
  }], sum, 0, [])

  assert.throws(init, /pass one to transduce/)
})
