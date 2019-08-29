import _curry2 from '../_internals/_curry2'
import _appendǃ from '../_internals/_appendǃ'

const multiples = (limit, n) => {
  const m = []

  for (let i = 0; i < limit; i++) {
    const result = i * n

    if (result > limit) {
      return m
    }

    _appendǃ(m, result)
  }

  return m
}

export default _curry2(multiples)
