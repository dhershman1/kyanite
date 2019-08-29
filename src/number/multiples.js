import _curry2 from '../_internals/_curry2'

const multiples = (limit, n) => {
  const m = []

  for (let i = 0; i < limit; i++) {
    const result = i * n

    if (result > limit) {
      return m
    }

    m.push(result)
  }

  return m
}

export default _curry2(multiples)
