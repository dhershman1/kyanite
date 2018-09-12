import test from 'tape'
import unzip from '../../src/object/unzip'

test('Unzips a basic object', t => {
  const [props, vals] = unzip({ a: 1, b: 2, c: 3 })

  t.same(props, ['a', 'b', 'c'], 'unzip -- props match')
  t.same(vals, [1, 2, 3], 'unzip -- values match')
  t.end()
})

test('Unzips a more complex object', t => {
  const [props, vals] = unzip({
    a: {
      b: 1
    },
    c: {
      d: 2
    },
    e: 3
  })

  t.same(props, ['a', 'c', 'e'], 'unzip -- props match')
  t.same(vals, [{ b: 1 }, { d: 2 }, 3], 'unzip -- values match')
  t.end()
})

test('Handles array values', t => {
  const [props, vals] = unzip({ a: [1, 2, 3], b: [4, 5, 6] })

  t.same(props, ['a', 'b'], 'unzip -- props match')
  t.same(vals, [[1, 2, 3], [4, 5, 6]])
  t.end()
})
