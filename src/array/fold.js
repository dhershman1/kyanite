import _curry2 from '../_internals/_curry2'
import flip from '../function/flip'

const fold = (fn, data) =>
  data.reduce(flip(fn), null)

export default _curry2(fold)
