import sift from '../../src/object/sift'
import test from 'tape'

test('sift -- Properly filters out desired properties', t => {
  const results = sift(x => typeof x === 'string', {
    id: 4,
    thing: 'test',
    other: 'cool'
  })

  t.deepEqual(results, {
    other: 'cool',
    thing: 'test'
  })
  t.end()
})

test('sift -- Properly removes emptied values based on function', t => {
  const results = sift(x => x.length, {
    'h422dcr4': [],
    'frtcsq1231': ['hello'],
    'dyuem009': [],
    '098ikdnsh': ['test']
  })

  t.deepEqual(results, {
    'frtcsq1231': ['hello'],
    '098ikdnsh': ['test']
  })
  t.end()
})

test('sift -- Is Curried', t => {
  const sifter = sift(x => typeof x === 'string')

  t.deepEqual(sifter({
    id: 4,
    thing: 'test',
    other: 'cool'
  }), {
    other: 'cool',
    thing: 'test'
  })
  t.end()
})
