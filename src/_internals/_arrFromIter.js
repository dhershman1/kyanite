const arrFromIter = iter => {
  const list = []
  let next = null

  while (!(next = iter.next()).done) {
    list.push(next.value)
  }

  return list
}

export default arrFromIter
