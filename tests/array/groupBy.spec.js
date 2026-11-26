import groupBy from '../../src/array/groupBy.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('groupBy -- Grouped similar number values', () => {
  const results = groupBy(Math.floor, [4.2, 6.1, 6.4])

  assert.deepEqual(results, { 4: [4.2], 6: [6.1, 6.4] })
})

test('groupBy -- Groups similar string values', () => {
  const results = groupBy(x => x === 'test', ['val', 'test', 'test', 'other', 'val'])

  assert.deepEqual(results, { false: ['val', 'other', 'val'], true: ['test', 'test'] })
})

test('groupBy -- It is curried', () => {
  const g = groupBy(Math.floor)
  const results = g([4.2, 6.1, 6.4])

  assert.deepEqual(results, { 4: [4.2], 6: [6.1, 6.4] })
})

test('groupBy -- Returns empty object when given empty list', () => {
  assert.deepEqual(groupBy(Math.floor, []), {})
})

test('groupBy -- Complex grouping', () => {
  function grade (score) {
    return (score < 65) ? 'F' : (score < 70) ? 'D' : (score < 80) ? 'C' : (score < 90) ? 'B' : 'A'
  }

  function byGrade (student) {
    return grade(student.score || 0)
  }
  const students = [
    { name: 'Abby', score: 84 },
    { name: 'Brad', score: 73 },
    { name: 'Chris', score: 89 },
    { name: 'Dianne', score: 99 },
    { name: 'Eddy', score: 58 },
    { name: 'Fred', score: 67 },
    { name: 'Gillian', score: 91 },
    { name: 'Hannah', score: 78 },
    { name: 'Irene', score: 85 },
    { name: 'Jack', score: 69 }
  ]

  assert.deepEqual(
    groupBy(byGrade, students),
    {
      A: [{ name: 'Dianne', score: 99 }, { name: 'Gillian', score: 91 }],
      B: [{ name: 'Abby', score: 84 }, { name: 'Chris', score: 89 }, { name: 'Irene', score: 85 }],
      C: [{ name: 'Brad', score: 73 }, { name: 'Hannah', score: 78 }],
      D: [{ name: 'Fred', score: 67 }, { name: 'Jack', score: 69 }],
      F: [{ name: 'Eddy', score: 58 }]
    }
  )
})

test('groupBy -- Keeps a __proto__ group as its own key', () => {
  const results = groupBy(x => x, ['__proto__', 'a', '__proto__'])

  assert.deepEqual(Object.keys(results), ['__proto__', 'a'])
  assert.deepEqual(results.__proto__, ['__proto__', '__proto__']) // eslint-disable-line no-proto
  assert.equal(Object.getPrototypeOf(results), Object.prototype, 'The prototype is untouched')
})
