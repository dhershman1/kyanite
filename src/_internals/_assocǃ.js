import _curry3 from './_curry3'

/* Contained Setter direct mutation */
const _assocǃ = (acc, key, val) => {
  acc[key] = val

  return acc
}

export default _curry3(_assocǃ)
