import _xtap from '../_internals/_xtap'
import _curry2 from '../_internals/_curry2'

const tap = (fn, x) => {
  const xf = _xtap(fn)

  xf(x)

  return x
}

export default _curry2(tap)
