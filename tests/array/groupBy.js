import groupBy from '../../src/array/groupBy.js'
import test from 'tape'

test('groupBy -- Grouped similar number values', t => {
  const results = groupBy(Math.floor, [4.2, 6.1, 6.4])

  t.same(results, { 4: [4.2], 6: [6.1, 6.4] })
  t.end()
})

test('groupBy -- Groups similar string values', t => {
  const results = groupBy(x => x === 'test', ['val', 'test', 'test', 'other', 'val'])

  t.same(results, { false: ['val', 'other', 'val'], true: ['test', 'test'] })
  t.end()
})

test('groupBy -- It is curried', t => {
  const g = groupBy(Math.floor)
  const results = g([4.2, 6.1, 6.4])

  t.same(results, { 4: [4.2], 6: [6.1, 6.4] })
  t.end()
})

test('groupBy -- Returns empty object when given empty list', t => {
  t.same(groupBy(Math.floor, []), {})
  t.end()
})

test('groupBy -- Complex grouping', t => {
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

  t.same(
    groupBy(byGrade, students),
    {
      A: [{ name: 'Dianne', score: 99 }, { name: 'Gillian', score: 91 }],
      B: [{ name: 'Abby', score: 84 }, { name: 'Chris', score: 89 }, { name: 'Irene', score: 85 }],
      C: [{ name: 'Brad', score: 73 }, { name: 'Hannah', score: 78 }],
      D: [{ name: 'Fred', score: 67 }, { name: 'Jack', score: 69 }],
      F: [{ name: 'Eddy', score: 58 }]
    }
  )
  t.end()
})
