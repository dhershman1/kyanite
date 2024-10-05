/**
 * Returns true if the object is a transformer, false otherwise
 * @private
 * @param {any} obj The object to check if it is a transformer
 * @returns {Boolean} Whether or not the object is a transformer
 */
export default function _isTransformer (obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function'
}
