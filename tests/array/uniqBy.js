import test from 'tape'
import uniqBy from '../../src/array/uniqBy.js'

test('uniqBy -- Creates a unique array', t => {
  const results = uniqBy(x => x.length, ['and', 'here', 'are', 'some', 'words'])

  t.deepEqual(results, ['and', 'here', 'words'])
  t.end()
})

test('uniqBy -- returns an empty array if passed one', t => {
  t.deepEqual(uniqBy(x => x, []), [])
  t.end()
})

test('uniqBy -- Is curried', t => {
  const uq = uniqBy(x => x.length)

  t.deepEqual(uq(['and', 'here', 'are', 'some', 'words']), ['and', 'here', 'words'])
  t.end()
})
