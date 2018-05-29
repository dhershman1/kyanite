import test from 'tape'
import uniqBy from '../src/uniqBy'

test('Creates a unique array', t => {
  const results = uniqBy(x => x.length, ['and', 'here', 'are', 'some', 'words'])

  t.deepEqual(results, ['and', 'here', 'words'])
  t.end()
})

test('Is curried', t => {
  const uq = uniqBy(x => x.length)

  t.deepEqual(uq(['and', 'here', 'are', 'some', 'words']), ['and', 'here', 'words'])
  t.end()
})
