import omit from '../src/omit'
import test from 'tape'

test('Test omit()', t => {
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

test('Test curried omit single key', t => {
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

test('Test curried omit array of keys', t => {
  const omiter = omit(['cool', 'test'])
  const results = omiter({
    test: 1,
    cool: 2,
    cat: 'Mew!'
  })

  t.deepEqual(results, { cat: 'Mew!' })
  t.end()
})
