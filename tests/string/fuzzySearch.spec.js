import fuzzySearch from '../../src/string/fuzzySearch.js'
import test from 'tape'

test('fuzzySearch -- Basic Functionality', t => {
  t.ok(fuzzySearch)
  t.ok(fuzzySearch('twl', 'cartwheel'))
  t.notOk(fuzzySearch('dog', 'testing'))
  t.ok(fuzzySearch('ca', 'cast'))
  t.end()
})

test('fuzzySearch -- Little more advanced search', t => {
  t.true(fuzzySearch('cu', 'curry'))
  t.true(fuzzySearch('cu', 'curryN'))
  t.end()
})

test('fuzzySearch -- search with cu for chuck', t => {
  t.true(fuzzySearch('cu', 'chuck'))
  t.end()
})

test('fuzzySearch -- Handles needle length being greater than haystack length', t => {
  t.notOk(fuzzySearch('hello!', 'hi'), 'Needle is longer than haystack so returns false')
  t.end()
})

test('fuzzySearch -- Handles needle length being equal to haystack length', t => {
  t.ok(fuzzySearch('hi', 'hi'), 'Needle is equal to haystack so returns true')
  t.end()
})

test('fuzzySearch -- Handles slightly more complex strings within an array of objects', t => {
  const list = [
    { name: 'Atlanta (GA) - ADM Rolloff  *FRANCHISED*' },
    { name: 'Atlanta (GA) - All Haulers  *NO SERVICE*' },
    { name: 'Hagerstown/Winchester, VA (MD) - Rep *CHECK W/ HAULER' },
    { name: 'Chicago (IL) *Oak Park' },
    { name: 'Chicago (IL) *Evergreen Park*' },
    { name: 'Chicago (IL) *NO SERVICE*' }
  ]
  const results = list.filter(({ name }) => fuzzySearch('chicago', name.toLowerCase()))

  t.same(results.length, 3)
  t.same(results[0], { name: 'Chicago (IL) *Oak Park' })
  t.same(results[1], { name: 'Chicago (IL) *Evergreen Park*' })
  t.same(results[2], { name: 'Chicago (IL) *NO SERVICE*' })
  t.end()
})
