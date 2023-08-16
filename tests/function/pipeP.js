import test from 'tape'
import pipeP from '../../src/function/pipeP.js'

const foo = a => new Promise(resolve => resolve(a + '123'))
const bar = a => new Promise(resolve => resolve(a + '555'))

test('pipeP -- Basic functionality', t => {
  pipeP([foo, bar], '100').then(d => {
    t.is(d, '100123555')
    t.end()
  })
})

test('pipeP -- Is curried', t => {
  const fn = pipeP([foo, bar])

  fn('100').then(d => {
    t.is(d, '100123555')
    t.end()
  })
})
