const _containsWith = (pred, x, list) => {
  for (let i = 0, len = list.length; i < len; i++) {
    if (pred(x, list[i])) {
      return true
    }
  }

  return false
}

export default _containsWith
