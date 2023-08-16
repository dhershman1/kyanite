import test from 'tape'
import composeP from '../../src/function/composeP.js'

const foo = a => new Promise(resolve => resolve(a + '123'))
const bar = a => new Promise(resolve => resolve(a + '555'))

test('composeP -- Handles basic functionality', t => {
  composeP(bar, foo, '100').then(d => {
    t.is(d, '100123555')
    t.end()
  })
})

test('composeP -- Is curried', t => {
  const fn = composeP(bar, foo)

  fn('100').then(d => {
    t.is(d, '100123555')
    t.end()
  })
})
