import sort from '../array/sort'
import ascend from '../function/ascend'
import mean from './mean'
import slice from '../list/slice'
import pipe from '../function/pipe'

const median = list => {
  const len = list.length

  if (len === 0) {
    return NaN
  }

  const width = 2 - len % 2
  const idx = (len - width) / 2

  return pipe([
    sort(ascend),
    slice(idx, idx + width),
    mean
  ], list)
}

export default median
