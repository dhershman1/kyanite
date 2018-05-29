import sift from '../src/sift'
import test from 'tape'

test('Properly filters out desired properties', t => {
  const results = sift(['id', 'thing'], {
    id: 4,
    thing: 'test',
    other: 'cool'
  })

  t.deepEqual(results, {
    id: 4,
    thing: 'test'
  })
  t.end()
})

test('Is Curried', t => {
  const sifter = sift(['id', 'thing'])

  t.deepEqual(sifter({
    id: 4,
    thing: 'test',
    other: 'cool'
  }), {
    id: 4,
    thing: 'test'
  })
  t.end()
})
