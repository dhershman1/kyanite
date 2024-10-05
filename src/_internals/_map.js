import _assocǃ from './_assocǃ.js'

export default function _map (fn, list) {
  let idx = 0
  const len = list.length
  const result = Array(len)

  while (idx < len) {
    _assocǃ(result, idx, fn(list[idx]))
    idx += 1
  }

  return result
}
