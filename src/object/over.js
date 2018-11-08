import _curry3 from '../_internals/_curry3'

const over = (key, fn, obj) =>
  Object.assign({}, obj, { [key]: fn(obj[key]) })

export default _curry3(over)
