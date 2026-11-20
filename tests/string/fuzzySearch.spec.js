import fuzzySearch from '../../src/string/fuzzySearch.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('fuzzySearch -- Basic Functionality', () => {
  assert.ok(fuzzySearch)
  assert.ok(fuzzySearch('twl', 'cartwheel'))
  assert.ok(!fuzzySearch('dog', 'testing'))
  assert.ok(fuzzySearch('ca', 'cast'))
})

test('fuzzySearch -- Little more advanced search', () => {
  assert.ok(fuzzySearch('cu', 'curry'))
  assert.ok(fuzzySearch('cu', 'curryN'))
})

test('fuzzySearch -- search with cu for chuck', () => {
  assert.ok(fuzzySearch('cu', 'chuck'))
})

test('fuzzySearch -- Handles needle length being greater than haystack length', () => {
  assert.ok(!fuzzySearch('hello!', 'hi'), 'Needle is longer than haystack so returns false')
})

test('fuzzySearch -- Handles needle length being equal to haystack length', () => {
  assert.ok(fuzzySearch('hi', 'hi'), 'Needle is equal to haystack so returns true')
})

test('fuzzySearch -- Handles slightly more complex strings within an array of objects', () => {
  const list = [
    { name: 'Atlanta (GA) - ADM Rolloff  *FRANCHISED*' },
    { name: 'Atlanta (GA) - All Haulers  *NO SERVICE*' },
    { name: 'Hagerstown/Winchester, VA (MD) - Rep *CHECK W/ HAULER' },
    { name: 'Chicago (IL) *Oak Park' },
    { name: 'Chicago (IL) *Evergreen Park*' },
    { name: 'Chicago (IL) *NO SERVICE*' }
  ]
  const results = list.filter(({ name }) => fuzzySearch('chicago', name.toLowerCase()))

  assert.deepEqual(results.length, 3)
  assert.deepEqual(results[0], { name: 'Chicago (IL) *Oak Park' })
  assert.deepEqual(results[1], { name: 'Chicago (IL) *Evergreen Park*' })
  assert.deepEqual(results[2], { name: 'Chicago (IL) *NO SERVICE*' })
})
