// import update from '../array/update'

const random = (low, high) => low + Math.floor(Math.random() * (high - low + 1))

const _shuffle = (size, list) => {
  let arr = list.slice()
  let index = -1
  const len = list.length
  const end = len - 1

  while (++index < size) {
    const rando = random(index, end)
    const val = list[rando]

    arr[rando] = arr[index]
    arr[index] = val
  }

  return arr
}

const data = ['pony', 'unicorn', 'rainbow', 'sparkles', 'kitty', 'tacos']

console.log(_shuffle(data.length, data))

// export default _shuffle
