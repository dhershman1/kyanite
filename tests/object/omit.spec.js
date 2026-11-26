import omit from '../../src/object/omit.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('omit -- Test omit()', () => {
  assert.deepEqual(omit(['test'], {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cool: 2,
    cat: 'Mew!'
  })

  assert.deepEqual(omit(['cool', 'test'], {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cat: 'Mew!'
  })
})

test('omit -- Test curried omit single key', () => {
  const omiter = omit(['test'])
  const results = omiter({
    test: 1,
    cool: 2,
    cat: 'Mew!'
  })

  assert.deepEqual(results, {
    cool: 2,
    cat: 'Mew!'
  })
})

test('omit -- Test curried omit array of keys', () => {
  const omiter = omit(['cool', 'test'])
  const results = omiter({
    test: 1,
    cool: 2,
    cat: 'Mew!'
  })

  assert.deepEqual(results, { cat: 'Mew!' })
})
