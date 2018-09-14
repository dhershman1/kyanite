import omit from '../../src/object/omit'
import test from 'tape'

test('omit -- Test omit()', t => {
  t.deepEqual(omit('test', {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cool: 2,
    cat: 'Mew!'
  })

  t.deepEqual(omit(['cool', 'test'], {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cat: 'Mew!'
  })
  t.end()
})

test('omit -- Test curried omit single key', t => {
  const omiter = omit('test')
  const results = omiter({
    test: 1,
    cool: 2,
    cat: 'Mew!'
  })

  t.deepEqual(results, {
    cool: 2,
    cat: 'Mew!'
  })
  t.end()
})

test('omit -- Test curried omit array of keys', t => {
  const omiter = omit(['cool', 'test'])
  const results = omiter({
    test: 1,
    cool: 2,
    cat: 'Mew!'
  })

  t.deepEqual(results, { cat: 'Mew!' })
  t.end()
})
