import arrayFromIterator from '../src/_internals/array-from-iterator'
import test from 'tape'

const makeIterator = array => {
  let nextIndex = 0

  return {
    next () {
      return nextIndex < array.length ? {
        value: array[nextIndex++],
        done: false
      } : { done: true }
    }
  }
}

test('Test functionality', t => {
  const iter = makeIterator([])

  t.ok(arrayFromIterator(iter))
  t.deepEqual(arrayFromIterator(iter), [])
  t.end()
})

test('Test value functionality', t => {
  const iter = makeIterator(['test'])
  const results = arrayFromIterator(iter)

  t.ok(results)
  t.deepEqual(results, ['test'])
  t.end()
})
