import fuzzySearch from '../src/fuzzySearch'
import test from 'tape'

test('Basic Functionality', t => {
  t.ok(fuzzySearch)
  t.ok(fuzzySearch('twl', 'cartwheel'))
  t.notOk(fuzzySearch('dog', 'testing'))
  t.ok(fuzzySearch('ca', 'cast'))
  t.end()
})

test('Little more advanced search', t => {
  t.true(fuzzySearch('cu', 'curry'))
  t.true(fuzzySearch('cu', 'curryN'))
  t.end()
})

test('search with cu for chuck', t => {
  t.true(fuzzySearch('cu', 'chuck'))
  t.end()
})

test('Handles needle length being greater than haystack length', t => {
  t.notOk(fuzzySearch('hello!', 'hi'), 'Needle is longer than haystack so returns false')
  t.end()
})

test('Handles needle length being equal to haystack length', t => {
  t.ok(fuzzySearch('hi', 'hi'), 'Needle is equal to haystack so returns true')
  t.end()
})
