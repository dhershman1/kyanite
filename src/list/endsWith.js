import curry from '../function/curry'
import nth from './nth'

const endsWith = (a, list) =>
  nth(-1, list) === a

export default curry(endsWith)
